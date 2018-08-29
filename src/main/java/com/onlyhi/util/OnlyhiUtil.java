package com.onlyhi.util;

import java.util.Random;

/**
 * 基础工具类
 * @author Icey
 * @date 2016-12-20
 *
 */
public class OnlyhiUtil {
	
	/**
	 * 生成16位随机订单号
	 * @return
	 */
    public static String getOrderNo(){
    	String orderNo = System.currentTimeMillis()+"";
        Random rad=new Random();  
        String result  = orderNo+rad.nextInt(1000);  
        if(result.length()!=16){  
            return getOrderNo();  
        }  
        return result;  
    }
	  
}
