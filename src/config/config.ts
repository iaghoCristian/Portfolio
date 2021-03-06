import path from 'path';

const config = {
  imagesDirectory: path.resolve(__dirname, '..', '..', 'files', 'images'),
  videosDirectory: path.resolve(__dirname, '..', '..', 'files', 'videos'),
  gifsDirectory: path.resolve(__dirname, '..', '..', 'files', 'gifs'),
  iconsDirectory: path.resolve(__dirname, '..', '..', 'files', 'icons'),
  certificatesDirectory: path.resolve(
    __dirname,
    '..',
    '..',
    'files',
    'certificates',
  ),
};

export default config;
