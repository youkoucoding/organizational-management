import { OrgModel, MemberModel, CardModel } from "model";

// 根据member-id 值， 将member数据完整赋值给orgs中members数组。
// 集中处理一次数据，此数据作为渲染UI的原始数据
// 方法比较蠢，凑合能用，以后用lodash优化
// debug 时 模拟数据跟原始数据不一致，掉了不少头发，以后注意！！！
const getCompositeData = (orgs: OrgModel[], members: MemberModel[]) => {
  const _orgs = JSON.parse(JSON.stringify(orgs));
  const _members = JSON.parse(JSON.stringify(members)) as MemberModel[];

  for (let i = 0; i < _orgs.length; i++) {
    const arr = _orgs[i].members;
    if (arr) {
      for (let j = 0; j < arr.length; j++) {
        const result = _members.filter((element) => element.id === arr[j]);
        // result[0] ? (arr[j] = result[0]) : null; this is not good
        if (result[0]) {
          arr[j] = result[0];
        }
      }
    }
  }

  return _orgs as CardModel[];
};

export default getCompositeData;
