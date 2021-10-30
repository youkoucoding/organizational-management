import { RenderOrgModel } from "model";

// 将 已经组合好的原始数据，按照 parent 属性进行分类。
// 组合成为一个循环嵌套的 数据类型，即，为organizations数组中的每一元素加一个children 数组，
// 数组元素即为 id等于外层organization元素id的 另外一个 org 元素
// 供组件进行递归渲染。

// problem 如何组织成嵌套数据
/**
 * @param orgs
 * @param id initial with null.
 * @returns nested data ready for rendering
 * important:  {...item, children: getRenderData(items, item.id)}
 * 对filter 出数组的每一个元素 递归调用本函数，(id=item.id)  作用：
 * 递归第一轮： 在原始数组中，筛选出跟 本元素id 一致的子元素，添加至children属性的数组中。
 * 递归的结束条件：无法在原始列表中， 筛出符合条件的元素。即， 此元素的parent值，找不到 id跟这个parent一样的元素。
 * 缺点： 慢，每一次filter 都遍历判断 整个列表的id和parent是否相等
 */
// debug : org.parent = null XXX => org.parent === null <== debug is time killer!
export const getRenderData: any = (
  orgs: RenderOrgModel[],
  id: string | null = null
) => {
  return orgs
    .filter((org) => org.parent === id)
    .map((element) => ({
      ...element,
      children: getRenderData(orgs, element.id),
    }));
};
