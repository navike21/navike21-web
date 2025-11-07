import { complaintsBookEs } from './complaintsBook'
import { termsAndConditionsEs } from './termsAndConditions'
import { privacyPolicyEs } from './privacyPolicy'
import { dataProtectionEs } from './dataProtection'
import { cookiesPolicyEs } from './cookiesPolicy'
import { legalNoticeEs } from './legalNotice'
import { accessibilityStatementEs } from './accessibilityStatement'

import type { ILegalPage } from '../../types'

export const legalPagesEs: ILegalPage[] = [
  complaintsBookEs,
  termsAndConditionsEs,
  privacyPolicyEs,
  dataProtectionEs,
  cookiesPolicyEs,
  legalNoticeEs,
  accessibilityStatementEs
]
