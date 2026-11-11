import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const gitFiles = (args) => execFileSync('git', ['ls-files', '-z', ...args], {
  cwd: root,
  encoding: 'utf8',
}).split('\0').filter(Boolean);
const errors = new Set();
const sensitive = /(^|\/)(?:\.env(?:\..*)?|\.npmrc|\.netrc|id_rsa|id_ed25519)$|\.(?:pem|key|p12|pfx)$/i;
const template = /(^|\/)\.env(?:\.[^/]+)?\.example$/;

// Incluye archivos forzados al índice: .gitignore no protege lo ya versionado.
for (const path of gitFiles(['--cached', '--others', '--exclude-standard', '--deduplicate'])) {
  if (!existsSync(join(root, path))) continue;
  if (sensitive.test(path) && !template.test(path)) {
    errors.add(`Archivo sensible versionable: ${path}`);
  }
}
for (const path of gitFiles(['--cached', '--ignored', '--exclude-standard'])) {
  if (existsSync(join(root, path))) {
    errors.add(`Archivo ignorado que sigue en el índice: ${path}`);
  }
}

// Vite copia public/ incluso cuando Git ignora sus archivos.
function checkPublic(directory, prefix = 'public') {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = `${prefix}/${entry.name}`;
    if (entry.isSymbolicLink()) {
      errors.add(`Enlace simbólico en recursos públicos: ${path}`);
    } else if (
      sensitive.test(path) || entry.name.startsWith('.') ||
      /^(?:node_modules|private|tmp|docs|coverage)$/.test(entry.name) ||
      /\.(?:map|vue|log|local\.json)$/.test(entry.name)
    ) {
      errors.add(`Archivo o carpeta privada en recursos públicos: ${path}`);
    } else if (entry.isDirectory()) {
      checkPublic(new URL(`${entry.name}/`, directory), path);
    }
  }
}
checkPublic(new URL('../public/', import.meta.url));
if (existsSync(new URL('../public/index.html', import.meta.url))) {
  errors.add('public/index.html duplica la entrada de Vite; usa index.html en la raíz.');
}

if (errors.size) {
  console.error([...errors].join('\n'));
  process.exitCode = 1;
} else {
  console.log('Repositorio verificado: rutas sensibles, índice y recursos públicos.');
}
