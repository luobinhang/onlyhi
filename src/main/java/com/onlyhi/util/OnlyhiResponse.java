package com.onlyhi.util;

import com.alibaba.fastjson.JSON;

public class OnlyhiResponse {


    private static final String SUCCESS_CODE = "100";
    private static final String ERROR_CODE = "101";
    private static final String EXCEPTION_CODE = "101";

    private final String code;
    private final String msg;
    private final Object data;

    private OnlyhiResponse(String code, String msg, Object data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }

    public static OnlyhiResponse success(Object jsonStream) {
        return new OnlyhiResponse(SUCCESS_CODE, "success", jsonStream);
    }
    public static OnlyhiResponse error(Object jsonStream) {
        return new OnlyhiResponse(ERROR_CODE, "error", jsonStream);
    }
    
    public static OnlyhiResponse Exception(Object jsonStream) {
        return new OnlyhiResponse(EXCEPTION_CODE, "error", jsonStream);
    }

    public String toJson() {
        return JSON.toJSONString(this);
    }

    public String getCode() {
        return code;
    }

    public String getMsg() {
        return msg;
    }

    public Object getData() {
        return data;
    }

    public static void main(String[] args) {
    	System.out.println(OnlyhiResponse.success(null).toJson());
    	
	}

}
