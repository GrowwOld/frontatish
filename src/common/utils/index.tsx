import { Dimensions, PixelRatio } from 'react-native';
import { DimensionType } from '../types';

// getting radio button dimension based on DimensionType
export const getRadioDmnsn = (size: DimensionType) => {
  let outerDimen = {
    width: scaleDimension(14),
    height: scaleDimension(14),
    borderRadius: 7,
  };
  let innerDimen = {
    width: scaleDimension(8),
    height: scaleDimension(8),
    borderRadius: 5,
  };
  switch (size) {
    case 'xs':
      return [innerDimen, outerDimen];
    case 'sm':
      innerDimen = {
        width: scaleDimension(8),
        height: scaleDimension(8),
        borderRadius: scaleDimension(4),
      };
      outerDimen = {
        width: scaleDimension(16),
        height: scaleDimension(16),
        borderRadius: scaleDimension(8),
      };
      return [innerDimen, outerDimen];
    case 'md':
      innerDimen = {
        width: scaleDimension(10),
        height: scaleDimension(10),
        borderRadius: scaleDimension(5),
      };
      outerDimen = {
        width: scaleDimension(20),
        height: scaleDimension(20),
        borderRadius: scaleDimension(10),
      };
      return [innerDimen, outerDimen];
    case 'lg':
      innerDimen = {
        width: scaleDimension(12),
        height: scaleDimension(12),
        borderRadius: scaleDimension(6),
      };
      outerDimen = {
        width: scaleDimension(24),
        height: scaleDimension(24),
        borderRadius: scaleDimension(12),
      };
      return [innerDimen, outerDimen];
    default:
      return [innerDimen, outerDimen];
  }
};

// getting checkbox dimension based on DimensionType
export const getCheckDmnsn = (size: DimensionType) => {
  // not providing 'height' as argument to scaleDimension for heights as we need squares
  let height = scaleDimension(16);
  let width = scaleDimension(16);
  let iconSize = scaleDimension(12);
  switch (size) {
    case 'sm':
      return [height, width, iconSize];
    case 'md':
      height = scaleDimension(20);
      width = scaleDimension(20);
      iconSize = scaleDimension(16);
      return [height, width, iconSize];
    case 'lg':
      height = scaleDimension(24);
      width = scaleDimension(24);
      iconSize = scaleDimension(20);
      return [height, width, iconSize];
    default:
      return [height, width, iconSize];
  }
};

export const scaleDimension = (dimension: number, base = 'width') => {
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  const scale = base === 'width' ? screenWidth / 375 : screenHeight / 667; // viewport of iphone se 2nd gen
  const scaledDim = dimension * scale;
  return Math.round(PixelRatio.roundToNearestPixel(scaledDim));
};

export const customScaleDimension = (
  dimension: number,
  base = 'width',
  factor = 0.5,
) => {
  return dimension + (scaleDimension(dimension, base) - dimension) * factor;
};
