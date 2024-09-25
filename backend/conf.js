import fs from 'fs/promises';

export const conf = await loadConfig();

async function loadConfig() {
  let globalConfig = {};
  let localConfig = {};

  // Cargar configuración global desde conf.json si existe
  if (await existsAsync('./conf.json')) {
    const globalText = await fs.readFile('./conf.json', 'utf8');
    globalConfig = JSON.parse(globalText);
  }

  // Cargar configuración local desde conf.local.json si existe
  if (await existsAsync('./conf.local.json')) {
    const localText = await fs.readFile('./conf.local.json', 'utf8');
    localConfig = JSON.parse(localText);
  }

  // Combinar configuraciones global y local
  const mergedConfig = {
    ...globalConfig,
    ...localConfig
  };

  return mergedConfig;
}

// Función auxiliar para comprobar la existencia de un archivo de forma asíncrona
async function existsAsync(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch (error) {
    if (error.code === 'ENOENT') {
      return false;
    }
    throw error;
  }
}
