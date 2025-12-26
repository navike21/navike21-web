import { complaintsBookEs } from './complaintsBook'
import { termsAndConditionsEs } from './termsAndConditions'
import { privacyPolicyEs } from './privacyPolicy'
import { dataProtectionEs } from './dataProtection'
import { cookiesPolicyEs } from './cookiesPolicy'
import { legalNoticeEs } from './legalNotice'
import { accessibilityStatementEs } from './accessibilityStatement'

import type { LegalPage } from '../../types'

export const legalPagesEs: LegalPage[] = [
  complaintsBookEs,
  termsAndConditionsEs,
  privacyPolicyEs,
  dataProtectionEs,
  cookiesPolicyEs,
  legalNoticeEs,
  accessibilityStatementEs
]
