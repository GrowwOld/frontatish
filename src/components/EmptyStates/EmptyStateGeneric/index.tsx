import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
// eslint-disable-next-line import/order
// eslint-disable-next-line import/no-unresolved
import { Button } from 'supergroww';
import { Fonts, getColors } from '../../../styles';

import { EmptyStateGenericType } from './types';

const EmptyStateGeneric = (props: EmptyStateGenericType) => {
  const { topSection, middleSection, bottomSection } = props;

  const Colors = getColors(middleSection?.isDark);

  const styles = StyleSheet.create({
    topSection: {
      marginTop: 30,
      // marginTop: 20,
    },
    bottomSection: { margin: 0 },
    bottomSectionBorder: {
      marginTop: 15,
      borderStyle: 'dotted',
      borderRadius: 1,
      borderWidth: 1,
      borderColor: 'grey',
    },
    mainView: {
      backgroundColor: middleSection?.backgroundColor,
      height: Dimensions.get('window').height,
    },
    titleText: {
      fontSize: Fonts.size.h5,
      color: middleSection?.fontColor,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    supplementaryText: {
      fontSize: Fonts.size.medium_15,
      color: middleSection?.fontColor,
      padding: 10,
      textAlign: 'center',
    },
    singleButton: {
      backgroundColor: Colors.transparent,
      borderWidth: 0,
      marginTop: 30,
    },
    bottomButton: {
      backgroundColor: Colors.transparent,
      borderWidth: 0,
      fontSize: 10,
    },
    splashScreen: {
      width: Dimensions.get('window').width * 0.35,
      height: Dimensions.get('window').height * 0.25,
    },
    imageContainer: {
      marginTop: 85,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 70,
    },
    bottomFlexContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    bottomLeftText: {
      flex: 1.5,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      margin: 13,
      fontSize: 15,
      fontWeight: 'bold',
    },
    bottomRightText: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      textAlign: 'right',
      margin: 13,
      fontSize: 15,
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.mainView}>
      {topSection?.exists ? (
        <View style={styles.topSection}>
          <Text style={styles.titleText}> {topSection.titleText} </Text>
          <Text style={styles.supplementaryText}>
            {' '}
            {topSection.supplementaryText}{' '}
          </Text>
        </View>
      ) : (
        <View />
      )}

      {middleSection?.exists ? (
        <View>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: middleSection?.splashImageURL }}
              style={styles.splashScreen}
            />
          </View>

          {middleSection?.titleText ? (
            <Text style={styles.titleText}> {middleSection?.titleText} </Text>
          ) : (
            <View />
          )}

          {middleSection?.supplementaryText ? (
            <Text style={styles.supplementaryText}>
              {' '}
              {middleSection?.supplementaryText}{' '}
            </Text>
          ) : (
            <View />
          )}

          {middleSection?.buttonLabel ? (
            <Button
              type="secondary"
              label={middleSection?.buttonLabel}
              isDark
              customStyles={styles.singleButton}
            />
          ) : (
            <View />
          )}
        </View>
      ) : (
        <View />
      )}

      {bottomSection?.exists ? (
        <View style={styles.bottomSection}>
          <View style={styles.bottomSectionBorder} />
          <View style={styles.bottomFlexContainer}>
            <Text style={styles.bottomLeftText}>
              {bottomSection?.titleText}
            </Text>
            <View style={styles.bottomRightText}>
              <Button
                type="secondary"
                label={bottomSection?.buttonLabel}
                isDark
                customStyles={styles.bottomButton}
              />
            </View>
          </View>
        </View>
      ) : (
        <View />
      )}
    </View>
  );
};

const TempColors = getColors(false);

EmptyStateGeneric.defaultProps = {
  topSection: { exists: false },
  middleSection: {
    exists: true,
    titleText: 'Generic Title Text',
    supplementaryText: 'Generic supplementary text in one line',
    backgroundColor: TempColors.WHITE,
    splashImageURL: 'https://i.imgur.com/7LIS2G3.png',
    fontColor: 'black',
    isDark: false,
    customStyles: {},
  },
  bottomSection: { exists: false },
};

export default EmptyStateGeneric;
