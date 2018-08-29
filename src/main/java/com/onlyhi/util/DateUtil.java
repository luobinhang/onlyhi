package com.onlyhi.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 *
 * @author XuYao
 */
public final class DateUtil {

    private static final String DEFAULT_DATE_FORMAT = "yyyy-MM-dd";//默认日期格式
    private static final String DEFAULT_DATE_TIME_FORMAT = "yyyy-MM-dd HH:mm:ss";//默认日期时间格式
    private static final String DEFAULT_TIME_FORMAT = "HH:mm:ss";//默认时间格式

    /**
     * 日期格式转换为字符串 NULL值将获得当前日期
     *
     * @param date
     * @return
     */
    public static String parseDateToStr(Date date) {
        if (date == null) {
            date = new Date();
        }
        return new SimpleDateFormat(DEFAULT_DATE_FORMAT).format(date);
    }

    /**
     * 日期时间格式转换为字符串 NULL值将获得当前日期时间
     *
     * @param date
     * @return
     */
    public static String parseDateTimeToStr(Date date) {
        if (date == null) {
            date = new Date();
        }
        return new SimpleDateFormat(DEFAULT_DATE_TIME_FORMAT).format(date);
    }

    /**
     *
     * @param date
     * @return
     * @throws ParseException
     */
    public static Date parseDateStrToDate(String date) throws ParseException {
        return new SimpleDateFormat(DEFAULT_DATE_FORMAT).parse(date);
    }

    /**
     *
     * @param date
     * @return
     * @throws ParseException
     */
    public static Date getDateTimeStrToDate(String date) throws ParseException {
        return new SimpleDateFormat(DEFAULT_DATE_TIME_FORMAT).parse(date);
    }

    /**
     * 时间格式转换为字符串
     *
     * @param date
     * @return
     */
    public static Date getTimeStrToDate(String time) throws ParseException {
        return new SimpleDateFormat(DEFAULT_TIME_FORMAT).parse(time);
    }

    /**
     * 得到几天前的时间
     *
     * @param d
     * @param day
     * @return
     */
    public static Date getDateBefore(Date d, int day) {
        Calendar now = Calendar.getInstance();
        now.setTime(d);
        now.set(Calendar.DATE, now.get(Calendar.DATE) - day);
        return now.getTime();
    }

    /**
     * 得到几天后的时间
     *
     * @param d
     * @param day
     * @return
     */
    public static Date getDateAfter(Date d, int day) {
        Calendar now = Calendar.getInstance();
        now.setTime(d);
        now.set(Calendar.DATE, now.get(Calendar.DATE) + day);
        return now.getTime();
    }

    /**
     * 判断时间是否符合格式
     *
     * @param time 时间
     * @param chatset 时间固定格式
     * @return
     */
    public static boolean checkTimeVerifier(String time, String chatset) {
        boolean convertSuccess = true;
        SimpleDateFormat format = new SimpleDateFormat(chatset);
        try {
            // 设置lenient为false. 否则SimpleDateFormat会比较宽松地验证日期，比如2007/02/29会被接受，并转换成2007/03/01
            format.setLenient(false);
            format.parse(time);
        } catch (ParseException e) {
            // e.printStackTrace();
            // 如果throw java.text.ParseException或者NullPointerException，就说明格式不对
            convertSuccess = false;
        }
        return convertSuccess;
    }
    
    /**
     * 获取距离当前时间num年的日期时间
     * @param num 距离当前时间多少年的时间
     * @return {@link Date}
     */
    public static Date getNextYearDate(int num){
    	    Calendar calendar = Calendar.getInstance();
	        Date date = new Date(System.currentTimeMillis());
	        calendar.setTime(date);
//	        calendar.add(Calendar.WEEK_OF_YEAR, -1);
	        calendar.add(Calendar.YEAR, num);
	        date = calendar.getTime();
	        System.out.println(date);
	        return date;
    }

    /**
     * 验证日期字符串是否是YYYY-MM-DD格式
     *
     * @param str
     * @return
     */
    public static boolean isDataFormat(String str) {
        boolean flag = false;
        String regxStr = "^((\\d{2}(([02468][048])|([13579][26]))[\\-\\/\\s]?((((0?[13578])|(1[02]))[\\-\\/\\s]?((0?[1-9])|([1-2][0-9])|(3[01])))|(((0?[469])|(11))[\\-\\/\\s]?((0?[1-9])|([1-2][0-9])|(30)))|(0?2[\\-\\/\\s]?((0?[1-9])|([1-2][0-9])))))|(\\d{2}(([02468][1235679])|([13579][01345789]))[\\-\\/\\s]?((((0?[13578])|(1[02]))[\\-\\/\\s]?((0?[1-9])|([1-2][0-9])|(3[01])))|(((0?[469])|(11))[\\-\\/\\s]?((0?[1-9])|([1-2][0-9])|(30)))|(0?2[\\-\\/\\s]?((0?[1-9])|(1[0-9])|(2[0-8]))))))(\\s(((0?[0-9])|([1-2][0-3]))\\:([0-5]?[0-9])((\\s)|(\\:([0-5]?[0-9])))))?$";
        Pattern pattern1 = Pattern.compile(regxStr);
        Matcher isNo = pattern1.matcher(str);
        if (isNo.matches()) {
            flag = true;
        }
        return flag;
    }

    /**
     * 不同日期格式的字符串转换
     *
     * @param str 要转换的字符串
     * @param srcFromat 字符串初始格式
     * @param decFormat 字符串要转换成的格式
     * @return
     */
    public static String formatTransform(String str, String srcFromat, String decFormat) {
        String str1 = null;;
        try {
            SimpleDateFormat format = new SimpleDateFormat(srcFromat);
            Date date1 = format.parse(str);
            SimpleDateFormat format1 = new SimpleDateFormat(decFormat);
            str1 = format1.format(date1);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return str1;
    }
    
    /**  
     * 计算两个日期之间相差的天数  
     * @param smdate 较小的时间 
     * @param bdate  较大的时间 
     * @return 相差天数 
     * @throws ParseException  
     */    
    public static int daysBetween(Date smdate,Date bdate) throws ParseException    
    {    
        Calendar cal = Calendar.getInstance();    
        cal.setTime(smdate);    
        long time1 = cal.getTimeInMillis();                 
        cal.setTime(bdate);    
        long time2 = cal.getTimeInMillis();         
        long between_days=(time2-time1)/(1000*3600*24);  
            
       return Integer.parseInt(String.valueOf(between_days));           
    } 
}
