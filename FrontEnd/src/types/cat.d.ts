interface KindInfo {
  kind_code: string,
  kind_name: string,
  kind_profile: Blob | string,
  kind_form: string,
  kind_fur: string,
  kind_fur_pattern: string,
}
type KindList = KindInfo[];

interface CharcInfo{
  charc_id: string,
  extrovert: number,
  introvert: number,
  curious: number,
  tranquil: number,
  independence: number,
  friendly: number
}

interface CatInfo {
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

interface CatItem extends CatInfo{
  kind_name: KindInfo[kind_name],
  kind_profile: KindInfo[kind_profile],
}
type CatList = CatItem[];

type GetCatListByKindReqeustParams = {
  kind_code: KindInfo['kind_code'],
  curPage: number
}
type GetCatListByKeywordReqeustParams = {
  keyword: string,
  curPage: number
}

type selectedKindInfo = Pick<KindInfo, 'kind_code' | 'kind_name'>

interface CatInitialState {
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
}