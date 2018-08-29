package com.onlyhi.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 *
 * @author XuYao
 */
public final class ValidateUtil {

    /**
     * 判断邮箱的合法性
     *
     * @param email 邮箱号
     * @return 布尔值
     */
    public static boolean emailVerifier(String email) {
        boolean flag = false;
        //判断邮箱号是否为空
        if (!isNotEmpty(email)) {
            return flag;
        }
        //邮箱的正则表达式 判断邮箱是否合法
        Pattern pattern = Pattern.compile("^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$");
        Matcher matcher = pattern.matcher(email);
        flag = matcher.matches();
        return flag;
    }

    /**
     * 判断用户姓名的合法性 满足少数名族的姓名
     *
     * @param idName 用户姓名
     * @return boolean {true:姓名合法 flase:姓名不合法}
     */
    public static boolean IdNameValidate(String idName) {
        boolean flag = false;
        //判断姓名是否为空
        if (!isNotEmpty(idName)) {
            return flag;
        }
        //姓名的正则表达式
        Pattern pattern = Pattern.compile("[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*");
        Matcher matcher = pattern.matcher(idName);
        flag = matcher.matches();
        return flag;
    }

    /**
     * 金钱的正则表达式 小数点后只能有两位
     *
     * @param money 金钱值
     * @return {@link Boolean} {true:金钱值合法false：金钱值不合法}
     */
    public static boolean moneyValidate(String money) {
        boolean flag = false;
        //判断金钱是否为空
        if (null == money) {
            return flag;
        }
        //金钱的正则表达式
        Pattern pattern = Pattern.compile("^([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(.[0-9]{1,2})?$");
        Matcher matcher = pattern.matcher(money);
        flag = matcher.matches();
        return flag;
    }

    /**
     * 判断字符串是否为非空
     *
     * @param parameter 参数
     * @return 非空则返回true，空则返回false
     */
    public static boolean isNotEmpty(String parameter) {
        return parameter != null && !parameter.trim().isEmpty();
    }
}
