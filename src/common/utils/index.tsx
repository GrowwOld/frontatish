import { DimensionType } from '../types';

// getting radio button dimension based on DimensionType
export const getRadioDmnsn = (size: DimensionType) => {
  let outerDimen = {
    width: 14,
    height: 14,
    borderRadius: 7,
  };
  let innerDimen = {
    width: 8,
    height: 8,
    borderRadius: 5,
  };
  switch (size) {
    case 'xs':
      return [innerDimen, outerDimen];
    case 'sm':
      innerDimen = {
        width: 8,
        height: 8,
        borderRadius: 4,
      };
      outerDimen = {
        width: 16,
        height: 16,
        borderRadius: 8,
      };
      return [innerDimen, outerDimen];
    case 'md':
      innerDimen = {
        width: 10,
        height: 10,
        borderRadius: 5,
      };
      outerDimen = {
        width: 20,
        height: 20,
        borderRadius: 10,
      };
      return [innerDimen, outerDimen];
    case 'lg':
      innerDimen = {
        width: 12,
        height: 12,
        borderRadius: 6,
      };
      outerDimen = {
        width: 24,
        height: 24,
        borderRadius: 12,
      };
      return [innerDimen, outerDimen];
    default:
      return [innerDimen, outerDimen];
  }
};

// getting checkbox dimension based on DimensionType
export const getCheckDmnsn = (size: DimensionType) => {
  let height = 16;
  let width = 16;
  let iconSize = 12;
  switch (size) {
    case 'sm':
      return [height, width, iconSize];
    case 'md':
      height = 20;
      width = 20;
      iconSize = 16;
      return [height, width, iconSize];
    case 'lg':
      height = 24;
      width = 24;
      iconSize = 20;
      return [height, width, iconSize];
    default:
      return [height, width, iconSize];
  }
};
