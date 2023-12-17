export interface KindInfo {
  kind_code: string,
  kind_name: string,
  kind_profile: Blob | string,
  kind_form: string,
  kind_fur: string,
  kind_fur_pattern: string,
}
export type KindList = KindInfo[];

export interface CharcInfo{
  charc_id: string,
  extrovert: number,
  introvert: number,
  curious: number,
  tranquil: number,
  independence: number,
  friendly: number
}

export interface CatInfo {
  cat_code: number,
  cat_name: string,
  cat_age: number,
  kind_code: KindInfo['kind_code'],
  description: string,
  create_date: string,
  profile: Blob | string,
  address: string,
  charc_id: CharcInfo['charc_id'],
  see: number,
  user_id: string
}

export interface CatItem extends CatInfo{
  kind_name: KindInfo[kind_name],
  kind_profile: KindInfo[kind_profile],
}
export type CatList = CatItem[];

export type GetCatListByKindReqeustParams = {
  kind_code: KindInfo['kind_code'],
  curPage: number
}
export type GetCatListByKeywordReqeustParams = {
  keyword: string,
  curPage: number
}

export type selectedKindInfo = Pick<KindInfo, 'kind_code' | 'kind_name'>

export interface CatInitialState {
  catList: CatList,
  catKindList: KindList,
  lastKeyword: string,
  selectedKindName: selectedKindInfo['kind_name'],
  selectedKindCode: selectedKindInfo['kind_code'],
  curPage: number,
  selectedCat: CatItem,
  selectedCharc: CharcInfo
  isEndData: boolean,
  isLoading: boolean, 
  catEditFlag: boolean,
}