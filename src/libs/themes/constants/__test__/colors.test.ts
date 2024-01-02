import {
  blackColor,
  whiteColor,
  errorColor,
  gradientErrorColor,
  gradientInfoColor,
  gradientPrimaryColor,
  gradientSecondaryColor,
  gradientWarningColor,
  grayColor,
  infoColor,
  primaryColor,
  secondaryColor,
  successColor,
  successColorGradient,
  warningColor,
  transparentBlack,
  transparentWhite,
  transparentErrorColor,
  transparentInfoColor,
  transparentPrimaryColor,
  transparentSecondaryColor,
  transparentGray,
  transparentSuccessColor,
  transparentWarningColor
} from '../colors'

describe('colors', () => {
  it('should have the correct values', () => {
    expect(blackColor).toBe('#000000')
    expect(whiteColor).toBe('#FFFFFF')
    expect(errorColor).toEqual({
      light: '#FDAB76',
      main: '#FA541C',
      dark: '#B3200E',
      contrastText: '#FFFFFF'
    })
    expect(gradientErrorColor).toBe(
      'linear-gradient(135deg, #FF9B83 0%, #FF3632 100%)'
    )
    expect(gradientInfoColor).toBe(
      'linear-gradient(135deg, #61F3F3 0%, #00B8D9 100%)'
    )
    expect(gradientPrimaryColor).toBe(
      'linear-gradient(135deg, #5BE49B 0%, #00A76F 100%)'
    )
    expect(gradientSecondaryColor).toBe(
      'linear-gradient(135deg, #C684FF 0%, #8E33FF 100%)'
    )
    expect(gradientWarningColor).toBe(
      'linear-gradient(135deg, #FFD666 0%, #FFAB00 100%)'
    )
    expect(grayColor).toEqual({
      '900': '#161C24',
      '800': '#212B36',
      '700': '#454F5B',
      '600': '#637381',
      '500': '#919EAB',
      '400': '#C4CDD5',
      '300': '#DFE3E8',
      '200': '#F4F6F8',
      '100': '#F9FAFB'
    })
    expect(infoColor).toEqual({
      light: '#61F3F3',
      main: '#00B8D9',
      dark: '#006C9C',
      contrastText: '#FFFFFF'
    })
    expect(primaryColor).toEqual({
      light: '#5BE49B',
      main: '#00A76F',
      dark: '#007867',
      contrastText: '#FFFFFF'
    })
    expect(secondaryColor).toEqual({
      light: '#C684FF',
      main: '#8E33FF',
      dark: '#5119B7',
      contrastText: '#FFFFFF'
    })
    expect(successColor).toEqual({
      light: '#86E8AB',
      main: '#36B37E',
      dark: '#1B806A',
      contrastText: '#FFFFFF'
    })
    expect(successColorGradient).toBe(
      'linear-gradient(135deg, #86E8AB 0%, #36B37E 100%)'
    )
    expect(warningColor).toEqual({
      light: '#FFD666',
      main: '#FFAB00',
      dark: '#B76E00',
      contrastText: '#FFFFFF'
    })
    expect(transparentBlack).toEqual({
      '8': 'rgba(0, 0, 0, 0.08)',
      '12': 'rgba(0, 0, 0, 0.12)',
      '16': 'rgba(0, 0, 0, 0.16)',
      '24': 'rgba(0, 0, 0, 0.24)',
      '32': 'rgba(0, 0, 0, 0.32)',
      '48': 'rgba(0, 0, 0, 0.48)',
      '56': 'rgba(0, 0, 0, 0.56)'
    })
    expect(transparentWhite).toEqual({
      '8': 'rgba(255, 255, 255, 0.08)',
      '12': 'rgba(255, 255, 255, 0.12)',
      '16': 'rgba(255, 255, 255, 0.16)',
      '24': 'rgba(255, 255, 255, 0.24)',
      '32': 'rgba(255, 255, 255, 0.32)',
      '48': 'rgba(255, 255, 255, 0.48)',
      '56': 'rgba(255, 255, 255, 0.56)'
    })
    expect(transparentErrorColor).toEqual({
      '8': 'rgba(255, 54, 50, 0.08)',
      '12': 'rgba(255, 54, 50, 0.12)',
      '16': 'rgba(255, 54, 50, 0.16)',
      '24': 'rgba(255, 54, 50, 0.24)',
      '32': 'rgba(255, 54, 50, 0.32)',
      '48': 'rgba(255, 54, 50, 0.48)',
      '56': 'rgba(255, 54, 50, 0.56)'
    })
    expect(transparentInfoColor).toEqual({
      '8': 'rgba(0, 184, 217, 0.08)',
      '12': 'rgba(0, 184, 217, 0.12)',
      '16': 'rgba(0, 184, 217, 0.16)',
      '24': 'rgba(0, 184, 217, 0.24)',
      '32': 'rgba(0, 184, 217, 0.32)',
      '48': 'rgba(0, 184, 217, 0.48)',
      '56': 'rgba(0, 184, 217, 0.56)'
    })
    expect(transparentPrimaryColor).toEqual({
      '8': 'rgba(0, 167, 111, 0.08)',
      '12': 'rgba(0, 167, 111, 0.12)',
      '16': 'rgba(0, 167, 111, 0.16)',
      '24': 'rgba(0, 167, 111, 0.24)',
      '32': 'rgba(0, 167, 111, 0.32)',
      '48': 'rgba(0, 167, 111, 0.48)',
      '56': 'rgba(0, 167, 111, 0.56)'
    })
    expect(transparentSecondaryColor).toEqual({
      '8': 'rgba(142, 51, 255, 0.08)',
      '12': 'rgba(142, 51, 255, 0.12)',
      '16': 'rgba(142, 51, 255, 0.16)',
      '24': 'rgba(142, 51, 255, 0.24)',
      '32': 'rgba(142, 51, 255, 0.32)',
      '48': 'rgba(142, 51, 255, 0.48)',
      '56': 'rgba(142, 51, 255, 0.56)'
    })
    expect(transparentGray).toEqual({
      '8': 'rgba(145, 158, 171, 0.08)',
      '12': 'rgba(145, 158, 171, 0.12)',
      '16': 'rgba(145, 158, 171, 0.16)',
      '24': 'rgba(145, 158, 171, 0.24)',
      '32': 'rgba(145, 158, 171, 0.32)',
      '48': 'rgba(145, 158, 171, 0.48)',
      '56': 'rgba(145, 158, 171, 0.56)'
    })
    expect(transparentSuccessColor).toEqual({
      '8': 'rgba(54, 179, 126, 0.08)',
      '12': 'rgba(54, 179, 126, 0.12)',
      '16': 'rgba(54, 179, 126, 0.16)',
      '24': 'rgba(54, 179, 126, 0.24)',
      '32': 'rgba(54, 179, 126, 0.32)',
      '48': 'rgba(54, 179, 126, 0.48)',
      '56': 'rgba(54, 179, 126, 0.56)'
    })
    expect(transparentWarningColor).toEqual({
      '8': 'rgba(255, 171, 0, 0.08)',
      '12': 'rgba(255, 171, 0, 0.12)',
      '16': 'rgba(255, 171, 0, 0.16)',
      '24': 'rgba(255, 171, 0, 0.24)',
      '32': 'rgba(255, 171, 0, 0.32)',
      '48': 'rgba(255, 171, 0, 0.48)',
      '56': 'rgba(255, 171, 0, 0.56)'
    })
  })
})
