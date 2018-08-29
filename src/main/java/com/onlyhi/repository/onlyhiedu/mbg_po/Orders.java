package com.onlyhi.repository.onlyhiedu.mbg_po;

import java.util.Date;

public class Orders {
    private Long orderId;

    private String orderNo;

    private String courseName;

    private Long courseId;

    private Integer classHour;

    private Double totalPrice;

    private Double accountPayable;

    private Double alreadyPay;

    private Double pendingPay;

    private Double subtotal;

    private Double total;

    private Date orderTime;

    private Integer payStatus;

    private String payMethod;

    private Long contactId;

    private Long userId;

    private Date createDate;

    private Date updateDate;

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public String getOrderNo() {
        return orderNo;
    }

    public void setOrderNo(String orderNo) {
        this.orderNo = orderNo == null ? null : orderNo.trim();
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName == null ? null : courseName.trim();
    }

    public Long getCourseId() {
        return courseId;
    }

    public void setCourseId(Long courseId) {
        this.courseId = courseId;
    }

    public Integer getClassHour() {
        return classHour;
    }

    public void setClassHour(Integer classHour) {
        this.classHour = classHour;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
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

    public Double getPendingPay() {
        return pendingPay;
    }

    public void setPendingPay(Double pendingPay) {
        this.pendingPay = pendingPay;
    }

    public Double getSubtotal() {
        return subtotal;
    }

    public void setSubtotal(Double subtotal) {
        this.subtotal = subtotal;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public Date getOrderTime() {
        return orderTime;
    }

    public void setOrderTime(Date orderTime) {
        this.orderTime = orderTime;
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

    public Long getContactId() {
        return contactId;
    }

    public void setContactId(Long contactId) {
        this.contactId = contactId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
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