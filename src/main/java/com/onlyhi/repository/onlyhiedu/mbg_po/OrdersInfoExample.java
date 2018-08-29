package com.onlyhi.repository.onlyhiedu.mbg_po;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class OrdersInfoExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public OrdersInfoExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andOrderInfoIdIsNull() {
            addCriterion("order_info_id is null");
            return (Criteria) this;
        }

        public Criteria andOrderInfoIdIsNotNull() {
            addCriterion("order_info_id is not null");
            return (Criteria) this;
        }

        public Criteria andOrderInfoIdEqualTo(Long value) {
            addCriterion("order_info_id =", value, "orderInfoId");
            return (Criteria) this;
        }

        public Criteria andOrderInfoIdNotEqualTo(Long value) {
            addCriterion("order_info_id <>", value, "orderInfoId");
            return (Criteria) this;
        }

        public Criteria andOrderInfoIdGreaterThan(Long value) {
            addCriterion("order_info_id >", value, "orderInfoId");
            return (Criteria) this;
        }

        public Criteria andOrderInfoIdGreaterThanOrEqualTo(Long value) {
            addCriterion("order_info_id >=", value, "orderInfoId");
            return (Criteria) this;
        }

        public Criteria andOrderInfoIdLessThan(Long value) {
            addCriterion("order_info_id <", value, "orderInfoId");
            return (Criteria) this;
        }

        public Criteria andOrderInfoIdLessThanOrEqualTo(Long value) {
            addCriterion("order_info_id <=", value, "orderInfoId");
            return (Criteria) this;
        }

        public Criteria andOrderInfoIdIn(List<Long> values) {
            addCriterion("order_info_id in", values, "orderInfoId");
            return (Criteria) this;
        }

        public Criteria andOrderInfoIdNotIn(List<Long> values) {
            addCriterion("order_info_id not in", values, "orderInfoId");
            return (Criteria) this;
        }

        public Criteria andOrderInfoIdBetween(Long value1, Long value2) {
            addCriterion("order_info_id between", value1, value2, "orderInfoId");
            return (Criteria) this;
        }

        public Criteria andOrderInfoIdNotBetween(Long value1, Long value2) {
            addCriterion("order_info_id not between", value1, value2, "orderInfoId");
            return (Criteria) this;
        }

        public Criteria andOrderInfoNoIsNull() {
            addCriterion("order_info_no is null");
            return (Criteria) this;
        }

        public Criteria andOrderInfoNoIsNotNull() {
            addCriterion("order_info_no is not null");
            return (Criteria) this;
        }

        public Criteria andOrderInfoNoEqualTo(String value) {
            addCriterion("order_info_no =", value, "orderInfoNo");
            return (Criteria) this;
        }

        public Criteria andOrderInfoNoNotEqualTo(String value) {
            addCriterion("order_info_no <>", value, "orderInfoNo");
            return (Criteria) this;
        }

        public Criteria andOrderInfoNoGreaterThan(String value) {
            addCriterion("order_info_no >", value, "orderInfoNo");
            return (Criteria) this;
        }

        public Criteria andOrderInfoNoGreaterThanOrEqualTo(String value) {
            addCriterion("order_info_no >=", value, "orderInfoNo");
            return (Criteria) this;
        }

        public Criteria andOrderInfoNoLessThan(String value) {
            addCriterion("order_info_no <", value, "orderInfoNo");
            return (Criteria) this;
        }

        public Criteria andOrderInfoNoLessThanOrEqualTo(String value) {
            addCriterion("order_info_no <=", value, "orderInfoNo");
            return (Criteria) this;
        }

        public Criteria andOrderInfoNoLike(String value) {
            addCriterion("order_info_no like", value, "orderInfoNo");
            return (Criteria) this;
        }

        public Criteria andOrderInfoNoNotLike(String value) {
            addCriterion("order_info_no not like", value, "orderInfoNo");
            return (Criteria) this;
        }

        public Criteria andOrderInfoNoIn(List<String> values) {
            addCriterion("order_info_no in", values, "orderInfoNo");
            return (Criteria) this;
        }

        public Criteria andOrderInfoNoNotIn(List<String> values) {
            addCriterion("order_info_no not in", values, "orderInfoNo");
            return (Criteria) this;
        }

        public Criteria andOrderInfoNoBetween(String value1, String value2) {
            addCriterion("order_info_no between", value1, value2, "orderInfoNo");
            return (Criteria) this;
        }

        public Criteria andOrderInfoNoNotBetween(String value1, String value2) {
            addCriterion("order_info_no not between", value1, value2, "orderInfoNo");
            return (Criteria) this;
        }

        public Criteria andOrderNoIsNull() {
            addCriterion("order_no is null");
            return (Criteria) this;
        }

        public Criteria andOrderNoIsNotNull() {
            addCriterion("order_no is not null");
            return (Criteria) this;
        }

        public Criteria andOrderNoEqualTo(String value) {
            addCriterion("order_no =", value, "orderNo");
            return (Criteria) this;
        }

        public Criteria andOrderNoNotEqualTo(String value) {
            addCriterion("order_no <>", value, "orderNo");
            return (Criteria) this;
        }

        public Criteria andOrderNoGreaterThan(String value) {
            addCriterion("order_no >", value, "orderNo");
            return (Criteria) this;
        }

        public Criteria andOrderNoGreaterThanOrEqualTo(String value) {
            addCriterion("order_no >=", value, "orderNo");
            return (Criteria) this;
        }

        public Criteria andOrderNoLessThan(String value) {
            addCriterion("order_no <", value, "orderNo");
            return (Criteria) this;
        }

        public Criteria andOrderNoLessThanOrEqualTo(String value) {
            addCriterion("order_no <=", value, "orderNo");
            return (Criteria) this;
        }

        public Criteria andOrderNoLike(String value) {
            addCriterion("order_no like", value, "orderNo");
            return (Criteria) this;
        }

        public Criteria andOrderNoNotLike(String value) {
            addCriterion("order_no not like", value, "orderNo");
            return (Criteria) this;
        }

        public Criteria andOrderNoIn(List<String> values) {
            addCriterion("order_no in", values, "orderNo");
            return (Criteria) this;
        }

        public Criteria andOrderNoNotIn(List<String> values) {
            addCriterion("order_no not in", values, "orderNo");
            return (Criteria) this;
        }

        public Criteria andOrderNoBetween(String value1, String value2) {
            addCriterion("order_no between", value1, value2, "orderNo");
            return (Criteria) this;
        }

        public Criteria andOrderNoNotBetween(String value1, String value2) {
            addCriterion("order_no not between", value1, value2, "orderNo");
            return (Criteria) this;
        }

        public Criteria andTransactionNoIsNull() {
            addCriterion("transaction_no is null");
            return (Criteria) this;
        }

        public Criteria andTransactionNoIsNotNull() {
            addCriterion("transaction_no is not null");
            return (Criteria) this;
        }

        public Criteria andTransactionNoEqualTo(String value) {
            addCriterion("transaction_no =", value, "transactionNo");
            return (Criteria) this;
        }

        public Criteria andTransactionNoNotEqualTo(String value) {
            addCriterion("transaction_no <>", value, "transactionNo");
            return (Criteria) this;
        }

        public Criteria andTransactionNoGreaterThan(String value) {
            addCriterion("transaction_no >", value, "transactionNo");
            return (Criteria) this;
        }

        public Criteria andTransactionNoGreaterThanOrEqualTo(String value) {
            addCriterion("transaction_no >=", value, "transactionNo");
            return (Criteria) this;
        }

        public Criteria andTransactionNoLessThan(String value) {
            addCriterion("transaction_no <", value, "transactionNo");
            return (Criteria) this;
        }

        public Criteria andTransactionNoLessThanOrEqualTo(String value) {
            addCriterion("transaction_no <=", value, "transactionNo");
            return (Criteria) this;
        }

        public Criteria andTransactionNoLike(String value) {
            addCriterion("transaction_no like", value, "transactionNo");
            return (Criteria) this;
        }

        public Criteria andTransactionNoNotLike(String value) {
            addCriterion("transaction_no not like", value, "transactionNo");
            return (Criteria) this;
        }

        public Criteria andTransactionNoIn(List<String> values) {
            addCriterion("transaction_no in", values, "transactionNo");
            return (Criteria) this;
        }

        public Criteria andTransactionNoNotIn(List<String> values) {
            addCriterion("transaction_no not in", values, "transactionNo");
            return (Criteria) this;
        }

        public Criteria andTransactionNoBetween(String value1, String value2) {
            addCriterion("transaction_no between", value1, value2, "transactionNo");
            return (Criteria) this;
        }

        public Criteria andTransactionNoNotBetween(String value1, String value2) {
            addCriterion("transaction_no not between", value1, value2, "transactionNo");
            return (Criteria) this;
        }

        public Criteria andCourseIdIsNull() {
            addCriterion("course_id is null");
            return (Criteria) this;
        }

        public Criteria andCourseIdIsNotNull() {
            addCriterion("course_id is not null");
            return (Criteria) this;
        }

        public Criteria andCourseIdEqualTo(Long value) {
            addCriterion("course_id =", value, "courseId");
            return (Criteria) this;
        }

        public Criteria andCourseIdNotEqualTo(Long value) {
            addCriterion("course_id <>", value, "courseId");
            return (Criteria) this;
        }

        public Criteria andCourseIdGreaterThan(Long value) {
            addCriterion("course_id >", value, "courseId");
            return (Criteria) this;
        }

        public Criteria andCourseIdGreaterThanOrEqualTo(Long value) {
            addCriterion("course_id >=", value, "courseId");
            return (Criteria) this;
        }

        public Criteria andCourseIdLessThan(Long value) {
            addCriterion("course_id <", value, "courseId");
            return (Criteria) this;
        }

        public Criteria andCourseIdLessThanOrEqualTo(Long value) {
            addCriterion("course_id <=", value, "courseId");
            return (Criteria) this;
        }

        public Criteria andCourseIdIn(List<Long> values) {
            addCriterion("course_id in", values, "courseId");
            return (Criteria) this;
        }

        public Criteria andCourseIdNotIn(List<Long> values) {
            addCriterion("course_id not in", values, "courseId");
            return (Criteria) this;
        }

        public Criteria andCourseIdBetween(Long value1, Long value2) {
            addCriterion("course_id between", value1, value2, "courseId");
            return (Criteria) this;
        }

        public Criteria andCourseIdNotBetween(Long value1, Long value2) {
            addCriterion("course_id not between", value1, value2, "courseId");
            return (Criteria) this;
        }

        public Criteria andCourseNameIsNull() {
            addCriterion("course_name is null");
            return (Criteria) this;
        }

        public Criteria andCourseNameIsNotNull() {
            addCriterion("course_name is not null");
            return (Criteria) this;
        }

        public Criteria andCourseNameEqualTo(String value) {
            addCriterion("course_name =", value, "courseName");
            return (Criteria) this;
        }

        public Criteria andCourseNameNotEqualTo(String value) {
            addCriterion("course_name <>", value, "courseName");
            return (Criteria) this;
        }

        public Criteria andCourseNameGreaterThan(String value) {
            addCriterion("course_name >", value, "courseName");
            return (Criteria) this;
        }

        public Criteria andCourseNameGreaterThanOrEqualTo(String value) {
            addCriterion("course_name >=", value, "courseName");
            return (Criteria) this;
        }

        public Criteria andCourseNameLessThan(String value) {
            addCriterion("course_name <", value, "courseName");
            return (Criteria) this;
        }

        public Criteria andCourseNameLessThanOrEqualTo(String value) {
            addCriterion("course_name <=", value, "courseName");
            return (Criteria) this;
        }

        public Criteria andCourseNameLike(String value) {
            addCriterion("course_name like", value, "courseName");
            return (Criteria) this;
        }

        public Criteria andCourseNameNotLike(String value) {
            addCriterion("course_name not like", value, "courseName");
            return (Criteria) this;
        }

        public Criteria andCourseNameIn(List<String> values) {
            addCriterion("course_name in", values, "courseName");
            return (Criteria) this;
        }

        public Criteria andCourseNameNotIn(List<String> values) {
            addCriterion("course_name not in", values, "courseName");
            return (Criteria) this;
        }

        public Criteria andCourseNameBetween(String value1, String value2) {
            addCriterion("course_name between", value1, value2, "courseName");
            return (Criteria) this;
        }

        public Criteria andCourseNameNotBetween(String value1, String value2) {
            addCriterion("course_name not between", value1, value2, "courseName");
            return (Criteria) this;
        }

        public Criteria andAccountPayableIsNull() {
            addCriterion("account_payable is null");
            return (Criteria) this;
        }

        public Criteria andAccountPayableIsNotNull() {
            addCriterion("account_payable is not null");
            return (Criteria) this;
        }

        public Criteria andAccountPayableEqualTo(Double value) {
            addCriterion("account_payable =", value, "accountPayable");
            return (Criteria) this;
        }

        public Criteria andAccountPayableNotEqualTo(Double value) {
            addCriterion("account_payable <>", value, "accountPayable");
            return (Criteria) this;
        }

        public Criteria andAccountPayableGreaterThan(Double value) {
            addCriterion("account_payable >", value, "accountPayable");
            return (Criteria) this;
        }

        public Criteria andAccountPayableGreaterThanOrEqualTo(Double value) {
            addCriterion("account_payable >=", value, "accountPayable");
            return (Criteria) this;
        }

        public Criteria andAccountPayableLessThan(Double value) {
            addCriterion("account_payable <", value, "accountPayable");
            return (Criteria) this;
        }

        public Criteria andAccountPayableLessThanOrEqualTo(Double value) {
            addCriterion("account_payable <=", value, "accountPayable");
            return (Criteria) this;
        }

        public Criteria andAccountPayableIn(List<Double> values) {
            addCriterion("account_payable in", values, "accountPayable");
            return (Criteria) this;
        }

        public Criteria andAccountPayableNotIn(List<Double> values) {
            addCriterion("account_payable not in", values, "accountPayable");
            return (Criteria) this;
        }

        public Criteria andAccountPayableBetween(Double value1, Double value2) {
            addCriterion("account_payable between", value1, value2, "accountPayable");
            return (Criteria) this;
        }

        public Criteria andAccountPayableNotBetween(Double value1, Double value2) {
            addCriterion("account_payable not between", value1, value2, "accountPayable");
            return (Criteria) this;
        }

        public Criteria andAlreadyPayIsNull() {
            addCriterion("already_pay is null");
            return (Criteria) this;
        }

        public Criteria andAlreadyPayIsNotNull() {
            addCriterion("already_pay is not null");
            return (Criteria) this;
        }

        public Criteria andAlreadyPayEqualTo(Double value) {
            addCriterion("already_pay =", value, "alreadyPay");
            return (Criteria) this;
        }

        public Criteria andAlreadyPayNotEqualTo(Double value) {
            addCriterion("already_pay <>", value, "alreadyPay");
            return (Criteria) this;
        }

        public Criteria andAlreadyPayGreaterThan(Double value) {
            addCriterion("already_pay >", value, "alreadyPay");
            return (Criteria) this;
        }

        public Criteria andAlreadyPayGreaterThanOrEqualTo(Double value) {
            addCriterion("already_pay >=", value, "alreadyPay");
            return (Criteria) this;
        }

        public Criteria andAlreadyPayLessThan(Double value) {
            addCriterion("already_pay <", value, "alreadyPay");
            return (Criteria) this;
        }

        public Criteria andAlreadyPayLessThanOrEqualTo(Double value) {
            addCriterion("already_pay <=", value, "alreadyPay");
            return (Criteria) this;
        }

        public Criteria andAlreadyPayIn(List<Double> values) {
            addCriterion("already_pay in", values, "alreadyPay");
            return (Criteria) this;
        }

        public Criteria andAlreadyPayNotIn(List<Double> values) {
            addCriterion("already_pay not in", values, "alreadyPay");
            return (Criteria) this;
        }

        public Criteria andAlreadyPayBetween(Double value1, Double value2) {
            addCriterion("already_pay between", value1, value2, "alreadyPay");
            return (Criteria) this;
        }

        public Criteria andAlreadyPayNotBetween(Double value1, Double value2) {
            addCriterion("already_pay not between", value1, value2, "alreadyPay");
            return (Criteria) this;
        }

        public Criteria andStatusIsNull() {
            addCriterion("`status` is null");
            return (Criteria) this;
        }

        public Criteria andStatusIsNotNull() {
            addCriterion("`status` is not null");
            return (Criteria) this;
        }

        public Criteria andStatusEqualTo(Integer value) {
            addCriterion("`status` =", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotEqualTo(Integer value) {
            addCriterion("`status` <>", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusGreaterThan(Integer value) {
            addCriterion("`status` >", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusGreaterThanOrEqualTo(Integer value) {
            addCriterion("`status` >=", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusLessThan(Integer value) {
            addCriterion("`status` <", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusLessThanOrEqualTo(Integer value) {
            addCriterion("`status` <=", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusIn(List<Integer> values) {
            addCriterion("`status` in", values, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotIn(List<Integer> values) {
            addCriterion("`status` not in", values, "status");
            return (Criteria) this;
        }

        public Criteria andStatusBetween(Integer value1, Integer value2) {
            addCriterion("`status` between", value1, value2, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotBetween(Integer value1, Integer value2) {
            addCriterion("`status` not between", value1, value2, "status");
            return (Criteria) this;
        }

        public Criteria andSplitTimeIsNull() {
            addCriterion("split_time is null");
            return (Criteria) this;
        }

        public Criteria andSplitTimeIsNotNull() {
            addCriterion("split_time is not null");
            return (Criteria) this;
        }

        public Criteria andSplitTimeEqualTo(Date value) {
            addCriterion("split_time =", value, "splitTime");
            return (Criteria) this;
        }

        public Criteria andSplitTimeNotEqualTo(Date value) {
            addCriterion("split_time <>", value, "splitTime");
            return (Criteria) this;
        }

        public Criteria andSplitTimeGreaterThan(Date value) {
            addCriterion("split_time >", value, "splitTime");
            return (Criteria) this;
        }

        public Criteria andSplitTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("split_time >=", value, "splitTime");
            return (Criteria) this;
        }

        public Criteria andSplitTimeLessThan(Date value) {
            addCriterion("split_time <", value, "splitTime");
            return (Criteria) this;
        }

        public Criteria andSplitTimeLessThanOrEqualTo(Date value) {
            addCriterion("split_time <=", value, "splitTime");
            return (Criteria) this;
        }

        public Criteria andSplitTimeIn(List<Date> values) {
            addCriterion("split_time in", values, "splitTime");
            return (Criteria) this;
        }

        public Criteria andSplitTimeNotIn(List<Date> values) {
            addCriterion("split_time not in", values, "splitTime");
            return (Criteria) this;
        }

        public Criteria andSplitTimeBetween(Date value1, Date value2) {
            addCriterion("split_time between", value1, value2, "splitTime");
            return (Criteria) this;
        }

        public Criteria andSplitTimeNotBetween(Date value1, Date value2) {
            addCriterion("split_time not between", value1, value2, "splitTime");
            return (Criteria) this;
        }

        public Criteria andSplitUserIsNull() {
            addCriterion("split_user is null");
            return (Criteria) this;
        }

        public Criteria andSplitUserIsNotNull() {
            addCriterion("split_user is not null");
            return (Criteria) this;
        }

        public Criteria andSplitUserEqualTo(String value) {
            addCriterion("split_user =", value, "splitUser");
            return (Criteria) this;
        }

        public Criteria andSplitUserNotEqualTo(String value) {
            addCriterion("split_user <>", value, "splitUser");
            return (Criteria) this;
        }

        public Criteria andSplitUserGreaterThan(String value) {
            addCriterion("split_user >", value, "splitUser");
            return (Criteria) this;
        }

        public Criteria andSplitUserGreaterThanOrEqualTo(String value) {
            addCriterion("split_user >=", value, "splitUser");
            return (Criteria) this;
        }

        public Criteria andSplitUserLessThan(String value) {
            addCriterion("split_user <", value, "splitUser");
            return (Criteria) this;
        }

        public Criteria andSplitUserLessThanOrEqualTo(String value) {
            addCriterion("split_user <=", value, "splitUser");
            return (Criteria) this;
        }

        public Criteria andSplitUserLike(String value) {
            addCriterion("split_user like", value, "splitUser");
            return (Criteria) this;
        }

        public Criteria andSplitUserNotLike(String value) {
            addCriterion("split_user not like", value, "splitUser");
            return (Criteria) this;
        }

        public Criteria andSplitUserIn(List<String> values) {
            addCriterion("split_user in", values, "splitUser");
            return (Criteria) this;
        }

        public Criteria andSplitUserNotIn(List<String> values) {
            addCriterion("split_user not in", values, "splitUser");
            return (Criteria) this;
        }

        public Criteria andSplitUserBetween(String value1, String value2) {
            addCriterion("split_user between", value1, value2, "splitUser");
            return (Criteria) this;
        }

        public Criteria andSplitUserNotBetween(String value1, String value2) {
            addCriterion("split_user not between", value1, value2, "splitUser");
            return (Criteria) this;
        }

        public Criteria andPayStatusIsNull() {
            addCriterion("pay_status is null");
            return (Criteria) this;
        }

        public Criteria andPayStatusIsNotNull() {
            addCriterion("pay_status is not null");
            return (Criteria) this;
        }

        public Criteria andPayStatusEqualTo(Integer value) {
            addCriterion("pay_status =", value, "payStatus");
            return (Criteria) this;
        }

        public Criteria andPayStatusNotEqualTo(Integer value) {
            addCriterion("pay_status <>", value, "payStatus");
            return (Criteria) this;
        }

        public Criteria andPayStatusGreaterThan(Integer value) {
            addCriterion("pay_status >", value, "payStatus");
            return (Criteria) this;
        }

        public Criteria andPayStatusGreaterThanOrEqualTo(Integer value) {
            addCriterion("pay_status >=", value, "payStatus");
            return (Criteria) this;
        }

        public Criteria andPayStatusLessThan(Integer value) {
            addCriterion("pay_status <", value, "payStatus");
            return (Criteria) this;
        }

        public Criteria andPayStatusLessThanOrEqualTo(Integer value) {
            addCriterion("pay_status <=", value, "payStatus");
            return (Criteria) this;
        }

        public Criteria andPayStatusIn(List<Integer> values) {
            addCriterion("pay_status in", values, "payStatus");
            return (Criteria) this;
        }

        public Criteria andPayStatusNotIn(List<Integer> values) {
            addCriterion("pay_status not in", values, "payStatus");
            return (Criteria) this;
        }

        public Criteria andPayStatusBetween(Integer value1, Integer value2) {
            addCriterion("pay_status between", value1, value2, "payStatus");
            return (Criteria) this;
        }

        public Criteria andPayStatusNotBetween(Integer value1, Integer value2) {
            addCriterion("pay_status not between", value1, value2, "payStatus");
            return (Criteria) this;
        }

        public Criteria andPayMethodIsNull() {
            addCriterion("pay_method is null");
            return (Criteria) this;
        }

        public Criteria andPayMethodIsNotNull() {
            addCriterion("pay_method is not null");
            return (Criteria) this;
        }

        public Criteria andPayMethodEqualTo(String value) {
            addCriterion("pay_method =", value, "payMethod");
            return (Criteria) this;
        }

        public Criteria andPayMethodNotEqualTo(String value) {
            addCriterion("pay_method <>", value, "payMethod");
            return (Criteria) this;
        }

        public Criteria andPayMethodGreaterThan(String value) {
            addCriterion("pay_method >", value, "payMethod");
            return (Criteria) this;
        }

        public Criteria andPayMethodGreaterThanOrEqualTo(String value) {
            addCriterion("pay_method >=", value, "payMethod");
            return (Criteria) this;
        }

        public Criteria andPayMethodLessThan(String value) {
            addCriterion("pay_method <", value, "payMethod");
            return (Criteria) this;
        }

        public Criteria andPayMethodLessThanOrEqualTo(String value) {
            addCriterion("pay_method <=", value, "payMethod");
            return (Criteria) this;
        }

        public Criteria andPayMethodLike(String value) {
            addCriterion("pay_method like", value, "payMethod");
            return (Criteria) this;
        }

        public Criteria andPayMethodNotLike(String value) {
            addCriterion("pay_method not like", value, "payMethod");
            return (Criteria) this;
        }

        public Criteria andPayMethodIn(List<String> values) {
            addCriterion("pay_method in", values, "payMethod");
            return (Criteria) this;
        }

        public Criteria andPayMethodNotIn(List<String> values) {
            addCriterion("pay_method not in", values, "payMethod");
            return (Criteria) this;
        }

        public Criteria andPayMethodBetween(String value1, String value2) {
            addCriterion("pay_method between", value1, value2, "payMethod");
            return (Criteria) this;
        }

        public Criteria andPayMethodNotBetween(String value1, String value2) {
            addCriterion("pay_method not between", value1, value2, "payMethod");
            return (Criteria) this;
        }

        public Criteria andPayTimeIsNull() {
            addCriterion("pay_time is null");
            return (Criteria) this;
        }

        public Criteria andPayTimeIsNotNull() {
            addCriterion("pay_time is not null");
            return (Criteria) this;
        }

        public Criteria andPayTimeEqualTo(Date value) {
            addCriterion("pay_time =", value, "payTime");
            return (Criteria) this;
        }

        public Criteria andPayTimeNotEqualTo(Date value) {
            addCriterion("pay_time <>", value, "payTime");
            return (Criteria) this;
        }

        public Criteria andPayTimeGreaterThan(Date value) {
            addCriterion("pay_time >", value, "payTime");
            return (Criteria) this;
        }

        public Criteria andPayTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("pay_time >=", value, "payTime");
            return (Criteria) this;
        }

        public Criteria andPayTimeLessThan(Date value) {
            addCriterion("pay_time <", value, "payTime");
            return (Criteria) this;
        }

        public Criteria andPayTimeLessThanOrEqualTo(Date value) {
            addCriterion("pay_time <=", value, "payTime");
            return (Criteria) this;
        }

        public Criteria andPayTimeIn(List<Date> values) {
            addCriterion("pay_time in", values, "payTime");
            return (Criteria) this;
        }

        public Criteria andPayTimeNotIn(List<Date> values) {
            addCriterion("pay_time not in", values, "payTime");
            return (Criteria) this;
        }

        public Criteria andPayTimeBetween(Date value1, Date value2) {
            addCriterion("pay_time between", value1, value2, "payTime");
            return (Criteria) this;
        }

        public Criteria andPayTimeNotBetween(Date value1, Date value2) {
            addCriterion("pay_time not between", value1, value2, "payTime");
            return (Criteria) this;
        }

        public Criteria andCreateDateIsNull() {
            addCriterion("create_date is null");
            return (Criteria) this;
        }

        public Criteria andCreateDateIsNotNull() {
            addCriterion("create_date is not null");
            return (Criteria) this;
        }

        public Criteria andCreateDateEqualTo(Date value) {
            addCriterion("create_date =", value, "createDate");
            return (Criteria) this;
        }

        public Criteria andCreateDateNotEqualTo(Date value) {
            addCriterion("create_date <>", value, "createDate");
            return (Criteria) this;
        }

        public Criteria andCreateDateGreaterThan(Date value) {
            addCriterion("create_date >", value, "createDate");
            return (Criteria) this;
        }

        public Criteria andCreateDateGreaterThanOrEqualTo(Date value) {
            addCriterion("create_date >=", value, "createDate");
            return (Criteria) this;
        }

        public Criteria andCreateDateLessThan(Date value) {
            addCriterion("create_date <", value, "createDate");
            return (Criteria) this;
        }

        public Criteria andCreateDateLessThanOrEqualTo(Date value) {
            addCriterion("create_date <=", value, "createDate");
            return (Criteria) this;
        }

        public Criteria andCreateDateIn(List<Date> values) {
            addCriterion("create_date in", values, "createDate");
            return (Criteria) this;
        }

        public Criteria andCreateDateNotIn(List<Date> values) {
            addCriterion("create_date not in", values, "createDate");
            return (Criteria) this;
        }

        public Criteria andCreateDateBetween(Date value1, Date value2) {
            addCriterion("create_date between", value1, value2, "createDate");
            return (Criteria) this;
        }

        public Criteria andCreateDateNotBetween(Date value1, Date value2) {
            addCriterion("create_date not between", value1, value2, "createDate");
            return (Criteria) this;
        }

        public Criteria andUpdateDateIsNull() {
            addCriterion("update_date is null");
            return (Criteria) this;
        }

        public Criteria andUpdateDateIsNotNull() {
            addCriterion("update_date is not null");
            return (Criteria) this;
        }

        public Criteria andUpdateDateEqualTo(Date value) {
            addCriterion("update_date =", value, "updateDate");
            return (Criteria) this;
        }

        public Criteria andUpdateDateNotEqualTo(Date value) {
            addCriterion("update_date <>", value, "updateDate");
            return (Criteria) this;
        }

        public Criteria andUpdateDateGreaterThan(Date value) {
            addCriterion("update_date >", value, "updateDate");
            return (Criteria) this;
        }

        public Criteria andUpdateDateGreaterThanOrEqualTo(Date value) {
            addCriterion("update_date >=", value, "updateDate");
            return (Criteria) this;
        }

        public Criteria andUpdateDateLessThan(Date value) {
            addCriterion("update_date <", value, "updateDate");
            return (Criteria) this;
        }

        public Criteria andUpdateDateLessThanOrEqualTo(Date value) {
            addCriterion("update_date <=", value, "updateDate");
            return (Criteria) this;
        }

        public Criteria andUpdateDateIn(List<Date> values) {
            addCriterion("update_date in", values, "updateDate");
            return (Criteria) this;
        }

        public Criteria andUpdateDateNotIn(List<Date> values) {
            addCriterion("update_date not in", values, "updateDate");
            return (Criteria) this;
        }

        public Criteria andUpdateDateBetween(Date value1, Date value2) {
            addCriterion("update_date between", value1, value2, "updateDate");
            return (Criteria) this;
        }

        public Criteria andUpdateDateNotBetween(Date value1, Date value2) {
            addCriterion("update_date not between", value1, value2, "updateDate");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}