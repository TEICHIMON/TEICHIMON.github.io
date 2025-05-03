const prefix = process.env.NODE_ENV === 'production' ? '/TEICHIMON.github.io' : '';

export function getAssetPath(assetPath: string) {
  return `${prefix}${assetPath}`;
}
