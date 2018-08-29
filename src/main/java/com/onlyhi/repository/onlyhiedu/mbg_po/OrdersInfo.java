package com.onlyhi.repository.onlyhiedu.mbg_po;

import java.util.Date;

public class OrdersInfo {
    private Long orderInfoId;

    private String orderInfoNo;

    private String orderNo;

    private String transactionNo;

    private Long courseId;

    private String courseName;

    private Double accountPayable;

    private Double alreadyPay;

    private Integer status;

    private Date splitTime;

    private String splitUser;

    private Integer payStatus;

    private String payMethod;

    private Date payTime;

    private Date createDate;

    private Date updateDate;

    public Long getOrderInfoId() {
        return orderInfoId;
    }

    public void setOrderInfoId(Long orderInfoId) {
        this.orderInfoId = orderInfoId;
    }

    public String getOrderInfoNo() {
        return orderInfoNo;
    }

    public void setOrderInfoNo(String orderInfoNo) {
        this.orderInfoNo = orderInfoNo == null ? null : orderInfoNo.trim();
    }

    public String getOrderNo() {
        return orderNo;
    }

    public void setOrderNo(String orderNo) {
        this.orderNo = orderNo == null ? null : orderNo.trim();
    }

    public String getTransactionNo() {
        return transactionNo;
    }

    public void setTransactionNo(String transactionNo) {
        this.transactionNo = transactionNo == null ? null : transactionNo.trim();
    }

    public Long getCourseId() {
        return courseId;
    }

    public void setCourseId(Long courseId) {
        this.courseId = courseId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName == null ? null : courseName.trim();
    }

    public Double getAccountPayable() {
        return accountPayable;
    }

    public void setAccountPayable(Double accountPayable) {
        this.accountPayable = accountPayable;
    }

    public Double getAlreadyPay() {
        return alreadyPay;
    }

    public void setAlreadyPay(Double alreadyPay) {
        this.alreadyPay = alreadyPay;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Date getSplitTime() {
        return splitTime;
    }

    public void setSplitTime(Date splitTime) {
        this.splitTime = splitTime;
    }

    public String getSplitUser() {
        return splitUser;
    }

    public void setSplitUser(String splitUser) {
        this.splitUser = splitUser == null ? null : splitUser.trim();
    }

    public Integer getPayStatus() {
        return payStatus;
    }

    public void setPayStatus(Integer payStatus) {
        this.payStatus = payStatus;
    }

    public String getPayMethod() {
        return payMethod;
    }

    public void setPayMethod(String payMethod) {
        this.payMethod = payMethod == null ? null : payMethod.trim();
    }

    public Date getPayTime() {
        return payTime;
    }

    public void setPayTime(Date payTime) {
        this.payTime = payTime;
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

	@Override
	public String toString() {
		return "OrdersInfo [orderInfoId=" + orderInfoId + ", orderInfoNo=" + orderInfoNo + ", orderNo=" + orderNo
				+ ", transactionNo=" + transactionNo + ", courseId=" + courseId + ", courseName=" + courseName
				+ ", accountPayable=" + accountPayable + ", alreadyPay=" + alreadyPay + ", status=" + status
				+ ", splitTime=" + splitTime + ", splitUser=" + splitUser + ", payStatus=" + payStatus + ", payMethod="
				+ payMethod + ", payTime=" + payTime + ", createDate=" + createDate + ", updateDate=" + updateDate
				+ "]";
	}
    
}