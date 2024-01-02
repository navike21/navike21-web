import {
  AR,
  DE,
  EN,
  ES,
  FA,
  FR,
  HI,
  ID,
  IT,
  JA,
  KR,
  PT,
  RU,
  TH,
  TR,
  VI,
  ZH
} from '../lang'

describe('lang', () => {
  it('should have the same values', () => {
    expect(ES).toEqual('es')
    expect(EN).toEqual('en')
    expect(DE).toEqual('de')
    expect(FR).toEqual('fr')
    expect(IT).toEqual('it')
    expect(PT).toEqual('pt')
    expect(RU).toEqual('ru')
    expect(KR).toEqual('kr')
    expect(ZH).toEqual('zh')
    expect(JA).toEqual('ja')
    expect(TR).toEqual('tr')
    expect(VI).toEqual('vi')
    expect(ID).toEqual('id')
    expect(TH).toEqual('th')
    expect(HI).toEqual('hi')
    expect(AR).toEqual('ar')
    expect(FA).toEqual('fa')
  })
})
