package com.onlyhi.repository.onlyhiedu.mbg_po;

import java.util.Date;

public class Leads {
    private Long id;

    private String uuid;

    private String name;

    private String password;

    private String phone;

    private String grade;

    private String subject;

    private Date signupDate;

    private String contactTime;

    private String channelUuid;

    private String giveupUuid;

    private String giveupDes;

    private String jh;

    private String dy;

    private String keyNum;

    private String connectStatus;

    private Byte distributeStatus;

    private Byte studentStatus;

    private Boolean status;

    private Date createDate;

    private Date updateDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid == null ? null : uuid.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone == null ? null : phone.trim();
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade == null ? null : grade.trim();
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject == null ? null : subject.trim();
    }

    public Date getSignupDate() {
        return signupDate;
    }

    public void setSignupDate(Date signupDate) {
        this.signupDate = signupDate;
    }

    public String getContactTime() {
        return contactTime;
    }

    public void setContactTime(String contactTime) {
        this.contactTime = contactTime == null ? null : contactTime.trim();
    }

    public String getChannelUuid() {
        return channelUuid;
    }

    public void setChannelUuid(String channelUuid) {
        this.channelUuid = channelUuid == null ? null : channelUuid.trim();
    }

    public String getGiveupUuid() {
        return giveupUuid;
    }

    public void setGiveupUuid(String giveupUuid) {
        this.giveupUuid = giveupUuid == null ? null : giveupUuid.trim();
    }

    public String getGiveupDes() {
        return giveupDes;
    }

    public void setGiveupDes(String giveupDes) {
        this.giveupDes = giveupDes == null ? null : giveupDes.trim();
    }

    public String getJh() {
        return jh;
    }

    public void setJh(String jh) {
        this.jh = jh == null ? null : jh.trim();
    }

    public String getDy() {
        return dy;
    }

    public void setDy(String dy) {
        this.dy = dy == null ? null : dy.trim();
    }

    public String getKeyNum() {
        return keyNum;
    }

    public void setKeyNum(String keyNum) {
        this.keyNum = keyNum == null ? null : keyNum.trim();
    }

    public String getConnectStatus() {
        return connectStatus;
    }

    public void setConnectStatus(String connectStatus) {
        this.connectStatus = connectStatus == null ? null : connectStatus.trim();
    }

    public Byte getDistributeStatus() {
        return distributeStatus;
    }

    public void setDistributeStatus(Byte distributeStatus) {
        this.distributeStatus = distributeStatus;
    }

    public Byte getStudentStatus() {
        return studentStatus;
    }

    public void setStudentStatus(Byte studentStatus) {
        this.studentStatus = studentStatus;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }
}