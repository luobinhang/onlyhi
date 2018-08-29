package com.onlyhi.repository.onlyhiedu.mbg_po;

import java.util.Date;

public class Message {
    private Long id;

    private String msgId;

    private String sendMsg;

    private String code;

    private Date sendTime;

    private Integer status;

    private String sendInfo;

    private String extno;

    private Integer sendType;

    private String sendPhone;

    
    public Message() {
		super();
	}

	public Message(String msgId, String sendMsg, String code, Date sendTime, Integer status, String sendInfo,
			String extno, Integer sendType, String sendPhone) {
		super();
		this.msgId = msgId;
		this.sendMsg = sendMsg;
		this.code = code;
		this.sendTime = sendTime;
		this.status = status;
		this.sendInfo = sendInfo;
		this.extno = extno;
		this.sendType = sendType;
		this.sendPhone = sendPhone;
	}


	public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMsgId() {
        return msgId;
    }

    public void setMsgId(String msgId) {
        this.msgId = msgId == null ? null : msgId.trim();
    }

    public String getSendMsg() {
        return sendMsg;
    }

    public void setSendMsg(String sendMsg) {
        this.sendMsg = sendMsg == null ? null : sendMsg.trim();
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code == null ? null : code.trim();
    }

    public Date getSendTime() {
        return sendTime;
    }

    public void setSendTime(Date sendTime) {
        this.sendTime = sendTime;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getSendInfo() {
        return sendInfo;
    }

    public void setSendInfo(String sendInfo) {
        this.sendInfo = sendInfo == null ? null : sendInfo.trim();
    }

    public String getExtno() {
        return extno;
    }

    public void setExtno(String extno) {
        this.extno = extno == null ? null : extno.trim();
    }

    public Integer getSendType() {
        return sendType;
    }

    public void setSendType(Integer sendType) {
        this.sendType = sendType;
    }

    public String getSendPhone() {
        return sendPhone;
    }

    public void setSendPhone(String sendPhone) {
        this.sendPhone = sendPhone == null ? null : sendPhone.trim();
    }
}