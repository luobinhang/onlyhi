package com.onlyhi.repository.onlyhiedu.mbg_po;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class LeadsLogExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public LeadsLogExample() {
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

        public Criteria andIdIsNull() {
            addCriterion("id is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("id is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(Long value) {
            addCriterion("id =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(Long value) {
            addCriterion("id <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(Long value) {
            addCriterion("id >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(Long value) {
            addCriterion("id >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(Long value) {
            addCriterion("id <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(Long value) {
            addCriterion("id <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<Long> values) {
            addCriterion("id in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<Long> values) {
            addCriterion("id not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(Long value1, Long value2) {
            addCriterion("id between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(Long value1, Long value2) {
            addCriterion("id not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andNameIsNull() {
            addCriterion("`name` is null");
            return (Criteria) this;
        }

        public Criteria andNameIsNotNull() {
            addCriterion("`name` is not null");
            return (Criteria) this;
        }

        public Criteria andNameEqualTo(String value) {
            addCriterion("`name` =", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameNotEqualTo(String value) {
            addCriterion("`name` <>", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameGreaterThan(String value) {
            addCriterion("`name` >", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameGreaterThanOrEqualTo(String value) {
            addCriterion("`name` >=", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameLessThan(String value) {
            addCriterion("`name` <", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameLessThanOrEqualTo(String value) {
            addCriterion("`name` <=", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameLike(String value) {
            addCriterion("`name` like", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameNotLike(String value) {
            addCriterion("`name` not like", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameIn(List<String> values) {
            addCriterion("`name` in", values, "name");
            return (Criteria) this;
        }

        public Criteria andNameNotIn(List<String> values) {
            addCriterion("`name` not in", values, "name");
            return (Criteria) this;
        }

        public Criteria andNameBetween(String value1, String value2) {
            addCriterion("`name` between", value1, value2, "name");
            return (Criteria) this;
        }

        public Criteria andNameNotBetween(String value1, String value2) {
            addCriterion("`name` not between", value1, value2, "name");
            return (Criteria) this;
        }

        public Criteria andPhoneIsNull() {
            addCriterion("phone is null");
            return (Criteria) this;
        }

        public Criteria andPhoneIsNotNull() {
            addCriterion("phone is not null");
            return (Criteria) this;
        }

        public Criteria andPhoneEqualTo(String value) {
            addCriterion("phone =", value, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneNotEqualTo(String value) {
            addCriterion("phone <>", value, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneGreaterThan(String value) {
            addCriterion("phone >", value, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneGreaterThanOrEqualTo(String value) {
            addCriterion("phone >=", value, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneLessThan(String value) {
            addCriterion("phone <", value, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneLessThanOrEqualTo(String value) {
            addCriterion("phone <=", value, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneLike(String value) {
            addCriterion("phone like", value, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneNotLike(String value) {
            addCriterion("phone not like", value, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneIn(List<String> values) {
            addCriterion("phone in", values, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneNotIn(List<String> values) {
            addCriterion("phone not in", values, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneBetween(String value1, String value2) {
            addCriterion("phone between", value1, value2, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneNotBetween(String value1, String value2) {
            addCriterion("phone not between", value1, value2, "phone");
            return (Criteria) this;
        }

        public Criteria andGradeIsNull() {
            addCriterion("grade is null");
            return (Criteria) this;
        }

        public Criteria andGradeIsNotNull() {
            addCriterion("grade is not null");
            return (Criteria) this;
        }

        public Criteria andGradeEqualTo(String value) {
            addCriterion("grade =", value, "grade");
            return (Criteria) this;
        }

        public Criteria andGradeNotEqualTo(String value) {
            addCriterion("grade <>", value, "grade");
            return (Criteria) this;
        }

        public Criteria andGradeGreaterThan(String value) {
            addCriterion("grade >", value, "grade");
            return (Criteria) this;
        }

        public Criteria andGradeGreaterThanOrEqualTo(String value) {
            addCriterion("grade >=", value, "grade");
            return (Criteria) this;
        }

        public Criteria andGradeLessThan(String value) {
            addCriterion("grade <", value, "grade");
            return (Criteria) this;
        }

        public Criteria andGradeLessThanOrEqualTo(String value) {
            addCriterion("grade <=", value, "grade");
            return (Criteria) this;
        }

        public Criteria andGradeLike(String value) {
            addCriterion("grade like", value, "grade");
            return (Criteria) this;
        }

        public Criteria andGradeNotLike(String value) {
            addCriterion("grade not like", value, "grade");
            return (Criteria) this;
        }

        public Criteria andGradeIn(List<String> values) {
            addCriterion("grade in", values, "grade");
            return (Criteria) this;
        }

        public Criteria andGradeNotIn(List<String> values) {
            addCriterion("grade not in", values, "grade");
            return (Criteria) this;
        }

        public Criteria andGradeBetween(String value1, String value2) {
            addCriterion("grade between", value1, value2, "grade");
            return (Criteria) this;
        }

        public Criteria andGradeNotBetween(String value1, String value2) {
            addCriterion("grade not between", value1, value2, "grade");
            return (Criteria) this;
        }

        public Criteria andSubjectIsNull() {
            addCriterion("subject is null");
            return (Criteria) this;
        }

        public Criteria andSubjectIsNotNull() {
            addCriterion("subject is not null");
            return (Criteria) this;
        }

        public Criteria andSubjectEqualTo(String value) {
            addCriterion("subject =", value, "subject");
            return (Criteria) this;
        }

        public Criteria andSubjectNotEqualTo(String value) {
            addCriterion("subject <>", value, "subject");
            return (Criteria) this;
        }

        public Criteria andSubjectGreaterThan(String value) {
            addCriterion("subject >", value, "subject");
            return (Criteria) this;
        }

        public Criteria andSubjectGreaterThanOrEqualTo(String value) {
            addCriterion("subject >=", value, "subject");
            return (Criteria) this;
        }

        public Criteria andSubjectLessThan(String value) {
            addCriterion("subject <", value, "subject");
            return (Criteria) this;
        }

        public Criteria andSubjectLessThanOrEqualTo(String value) {
            addCriterion("subject <=", value, "subject");
            return (Criteria) this;
        }

        public Criteria andSubjectLike(String value) {
            addCriterion("subject like", value, "subject");
            return (Criteria) this;
        }

        public Criteria andSubjectNotLike(String value) {
            addCriterion("subject not like", value, "subject");
            return (Criteria) this;
        }

        public Criteria andSubjectIn(List<String> values) {
            addCriterion("subject in", values, "subject");
            return (Criteria) this;
        }

        public Criteria andSubjectNotIn(List<String> values) {
            addCriterion("subject not in", values, "subject");
            return (Criteria) this;
        }

        public Criteria andSubjectBetween(String value1, String value2) {
            addCriterion("subject between", value1, value2, "subject");
            return (Criteria) this;
        }

        public Criteria andSubjectNotBetween(String value1, String value2) {
            addCriterion("subject not between", value1, value2, "subject");
            return (Criteria) this;
        }

        public Criteria andSignupDateIsNull() {
            addCriterion("signup_date is null");
            return (Criteria) this;
        }

        public Criteria andSignupDateIsNotNull() {
            addCriterion("signup_date is not null");
            return (Criteria) this;
        }

        public Criteria andSignupDateEqualTo(Date value) {
            addCriterion("signup_date =", value, "signupDate");
            return (Criteria) this;
        }

        public Criteria andSignupDateNotEqualTo(Date value) {
            addCriterion("signup_date <>", value, "signupDate");
            return (Criteria) this;
        }

        public Criteria andSignupDateGreaterThan(Date value) {
            addCriterion("signup_date >", value, "signupDate");
            return (Criteria) this;
        }

        public Criteria andSignupDateGreaterThanOrEqualTo(Date value) {
            addCriterion("signup_date >=", value, "signupDate");
            return (Criteria) this;
        }

        public Criteria andSignupDateLessThan(Date value) {
            addCriterion("signup_date <", value, "signupDate");
            return (Criteria) this;
        }

        public Criteria andSignupDateLessThanOrEqualTo(Date value) {
            addCriterion("signup_date <=", value, "signupDate");
            return (Criteria) this;
        }

        public Criteria andSignupDateIn(List<Date> values) {
            addCriterion("signup_date in", values, "signupDate");
            return (Criteria) this;
        }

        public Criteria andSignupDateNotIn(List<Date> values) {
            addCriterion("signup_date not in", values, "signupDate");
            return (Criteria) this;
        }

        public Criteria andSignupDateBetween(Date value1, Date value2) {
            addCriterion("signup_date between", value1, value2, "signupDate");
            return (Criteria) this;
        }

        public Criteria andSignupDateNotBetween(Date value1, Date value2) {
            addCriterion("signup_date not between", value1, value2, "signupDate");
            return (Criteria) this;
        }

        public Criteria andContactTimeIsNull() {
            addCriterion("contact_time is null");
            return (Criteria) this;
        }

        public Criteria andContactTimeIsNotNull() {
            addCriterion("contact_time is not null");
            return (Criteria) this;
        }

        public Criteria andContactTimeEqualTo(String value) {
            addCriterion("contact_time =", value, "contactTime");
            return (Criteria) this;
        }

        public Criteria andContactTimeNotEqualTo(String value) {
            addCriterion("contact_time <>", value, "contactTime");
            return (Criteria) this;
        }

        public Criteria andContactTimeGreaterThan(String value) {
            addCriterion("contact_time >", value, "contactTime");
            return (Criteria) this;
        }

        public Criteria andContactTimeGreaterThanOrEqualTo(String value) {
            addCriterion("contact_time >=", value, "contactTime");
            return (Criteria) this;
        }

        public Criteria andContactTimeLessThan(String value) {
            addCriterion("contact_time <", value, "contactTime");
            return (Criteria) this;
        }

        public Criteria andContactTimeLessThanOrEqualTo(String value) {
            addCriterion("contact_time <=", value, "contactTime");
            return (Criteria) this;
        }

        public Criteria andContactTimeLike(String value) {
            addCriterion("contact_time like", value, "contactTime");
            return (Criteria) this;
        }

        public Criteria andContactTimeNotLike(String value) {
            addCriterion("contact_time not like", value, "contactTime");
            return (Criteria) this;
        }

        public Criteria andContactTimeIn(List<String> values) {
            addCriterion("contact_time in", values, "contactTime");
            return (Criteria) this;
        }

        public Criteria andContactTimeNotIn(List<String> values) {
            addCriterion("contact_time not in", values, "contactTime");
            return (Criteria) this;
        }

        public Criteria andContactTimeBetween(String value1, String value2) {
            addCriterion("contact_time between", value1, value2, "contactTime");
            return (Criteria) this;
        }

        public Criteria andContactTimeNotBetween(String value1, String value2) {
            addCriterion("contact_time not between", value1, value2, "contactTime");
            return (Criteria) this;
        }

        public Criteria andConnectStatusIsNull() {
            addCriterion("connect_status is null");
            return (Criteria) this;
        }

        public Criteria andConnectStatusIsNotNull() {
            addCriterion("connect_status is not null");
            return (Criteria) this;
        }

        public Criteria andConnectStatusEqualTo(String value) {
            addCriterion("connect_status =", value, "connectStatus");
            return (Criteria) this;
        }

        public Criteria andConnectStatusNotEqualTo(String value) {
            addCriterion("connect_status <>", value, "connectStatus");
            return (Criteria) this;
        }

        public Criteria andConnectStatusGreaterThan(String value) {
            addCriterion("connect_status >", value, "connectStatus");
            return (Criteria) this;
        }

        public Criteria andConnectStatusGreaterThanOrEqualTo(String value) {
            addCriterion("connect_status >=", value, "connectStatus");
            return (Criteria) this;
        }

        public Criteria andConnectStatusLessThan(String value) {
            addCriterion("connect_status <", value, "connectStatus");
            return (Criteria) this;
        }

        public Criteria andConnectStatusLessThanOrEqualTo(String value) {
            addCriterion("connect_status <=", value, "connectStatus");
            return (Criteria) this;
        }

        public Criteria andConnectStatusLike(String value) {
            addCriterion("connect_status like", value, "connectStatus");
            return (Criteria) this;
        }

        public Criteria andConnectStatusNotLike(String value) {
            addCriterion("connect_status not like", value, "connectStatus");
            return (Criteria) this;
        }

        public Criteria andConnectStatusIn(List<String> values) {
            addCriterion("connect_status in", values, "connectStatus");
            return (Criteria) this;
        }

        public Criteria andConnectStatusNotIn(List<String> values) {
            addCriterion("connect_status not in", values, "connectStatus");
            return (Criteria) this;
        }

        public Criteria andConnectStatusBetween(String value1, String value2) {
            addCriterion("connect_status between", value1, value2, "connectStatus");
            return (Criteria) this;
        }

        public Criteria andConnectStatusNotBetween(String value1, String value2) {
            addCriterion("connect_status not between", value1, value2, "connectStatus");
            return (Criteria) this;
        }

        public Criteria andChannelUuidIsNull() {
            addCriterion("channel_uuid is null");
            return (Criteria) this;
        }

        public Criteria andChannelUuidIsNotNull() {
            addCriterion("channel_uuid is not null");
            return (Criteria) this;
        }

        public Criteria andChannelUuidEqualTo(String value) {
            addCriterion("channel_uuid =", value, "channelUuid");
            return (Criteria) this;
        }

        public Criteria andChannelUuidNotEqualTo(String value) {
            addCriterion("channel_uuid <>", value, "channelUuid");
            return (Criteria) this;
        }

        public Criteria andChannelUuidGreaterThan(String value) {
            addCriterion("channel_uuid >", value, "channelUuid");
            return (Criteria) this;
        }

        public Criteria andChannelUuidGreaterThanOrEqualTo(String value) {
            addCriterion("channel_uuid >=", value, "channelUuid");
            return (Criteria) this;
        }

        public Criteria andChannelUuidLessThan(String value) {
            addCriterion("channel_uuid <", value, "channelUuid");
            return (Criteria) this;
        }

        public Criteria andChannelUuidLessThanOrEqualTo(String value) {
            addCriterion("channel_uuid <=", value, "channelUuid");
            return (Criteria) this;
        }

        public Criteria andChannelUuidLike(String value) {
            addCriterion("channel_uuid like", value, "channelUuid");
            return (Criteria) this;
        }

        public Criteria andChannelUuidNotLike(String value) {
            addCriterion("channel_uuid not like", value, "channelUuid");
            return (Criteria) this;
        }

        public Criteria andChannelUuidIn(List<String> values) {
            addCriterion("channel_uuid in", values, "channelUuid");
            return (Criteria) this;
        }

        public Criteria andChannelUuidNotIn(List<String> values) {
            addCriterion("channel_uuid not in", values, "channelUuid");
            return (Criteria) this;
        }

        public Criteria andChannelUuidBetween(String value1, String value2) {
            addCriterion("channel_uuid between", value1, value2, "channelUuid");
            return (Criteria) this;
        }

        public Criteria andChannelUuidNotBetween(String value1, String value2) {
            addCriterion("channel_uuid not between", value1, value2, "channelUuid");
            return (Criteria) this;
        }

        public Criteria andJhIsNull() {
            addCriterion("jh is null");
            return (Criteria) this;
        }

        public Criteria andJhIsNotNull() {
            addCriterion("jh is not null");
            return (Criteria) this;
        }

        public Criteria andJhEqualTo(String value) {
            addCriterion("jh =", value, "jh");
            return (Criteria) this;
        }

        public Criteria andJhNotEqualTo(String value) {
            addCriterion("jh <>", value, "jh");
            return (Criteria) this;
        }

        public Criteria andJhGreaterThan(String value) {
            addCriterion("jh >", value, "jh");
            return (Criteria) this;
        }

        public Criteria andJhGreaterThanOrEqualTo(String value) {
            addCriterion("jh >=", value, "jh");
            return (Criteria) this;
        }

        public Criteria andJhLessThan(String value) {
            addCriterion("jh <", value, "jh");
            return (Criteria) this;
        }

        public Criteria andJhLessThanOrEqualTo(String value) {
            addCriterion("jh <=", value, "jh");
            return (Criteria) this;
        }

        public Criteria andJhLike(String value) {
            addCriterion("jh like", value, "jh");
            return (Criteria) this;
        }

        public Criteria andJhNotLike(String value) {
            addCriterion("jh not like", value, "jh");
            return (Criteria) this;
        }

        public Criteria andJhIn(List<String> values) {
            addCriterion("jh in", values, "jh");
            return (Criteria) this;
        }

        public Criteria andJhNotIn(List<String> values) {
            addCriterion("jh not in", values, "jh");
            return (Criteria) this;
        }

        public Criteria andJhBetween(String value1, String value2) {
            addCriterion("jh between", value1, value2, "jh");
            return (Criteria) this;
        }

        public Criteria andJhNotBetween(String value1, String value2) {
            addCriterion("jh not between", value1, value2, "jh");
            return (Criteria) this;
        }

        public Criteria andDyIsNull() {
            addCriterion("dy is null");
            return (Criteria) this;
        }

        public Criteria andDyIsNotNull() {
            addCriterion("dy is not null");
            return (Criteria) this;
        }

        public Criteria andDyEqualTo(String value) {
            addCriterion("dy =", value, "dy");
            return (Criteria) this;
        }

        public Criteria andDyNotEqualTo(String value) {
            addCriterion("dy <>", value, "dy");
            return (Criteria) this;
        }

        public Criteria andDyGreaterThan(String value) {
            addCriterion("dy >", value, "dy");
            return (Criteria) this;
        }

        public Criteria andDyGreaterThanOrEqualTo(String value) {
            addCriterion("dy >=", value, "dy");
            return (Criteria) this;
        }

        public Criteria andDyLessThan(String value) {
            addCriterion("dy <", value, "dy");
            return (Criteria) this;
        }

        public Criteria andDyLessThanOrEqualTo(String value) {
            addCriterion("dy <=", value, "dy");
            return (Criteria) this;
        }

        public Criteria andDyLike(String value) {
            addCriterion("dy like", value, "dy");
            return (Criteria) this;
        }

        public Criteria andDyNotLike(String value) {
            addCriterion("dy not like", value, "dy");
            return (Criteria) this;
        }

        public Criteria andDyIn(List<String> values) {
            addCriterion("dy in", values, "dy");
            return (Criteria) this;
        }

        public Criteria andDyNotIn(List<String> values) {
            addCriterion("dy not in", values, "dy");
            return (Criteria) this;
        }

        public Criteria andDyBetween(String value1, String value2) {
            addCriterion("dy between", value1, value2, "dy");
            return (Criteria) this;
        }

        public Criteria andDyNotBetween(String value1, String value2) {
            addCriterion("dy not between", value1, value2, "dy");
            return (Criteria) this;
        }

        public Criteria andKeyNumIsNull() {
            addCriterion("key_num is null");
            return (Criteria) this;
        }

        public Criteria andKeyNumIsNotNull() {
            addCriterion("key_num is not null");
            return (Criteria) this;
        }

        public Criteria andKeyNumEqualTo(String value) {
            addCriterion("key_num =", value, "keyNum");
            return (Criteria) this;
        }

        public Criteria andKeyNumNotEqualTo(String value) {
            addCriterion("key_num <>", value, "keyNum");
            return (Criteria) this;
        }

        public Criteria andKeyNumGreaterThan(String value) {
            addCriterion("key_num >", value, "keyNum");
            return (Criteria) this;
        }

        public Criteria andKeyNumGreaterThanOrEqualTo(String value) {
            addCriterion("key_num >=", value, "keyNum");
            return (Criteria) this;
        }

        public Criteria andKeyNumLessThan(String value) {
            addCriterion("key_num <", value, "keyNum");
            return (Criteria) this;
        }

        public Criteria andKeyNumLessThanOrEqualTo(String value) {
            addCriterion("key_num <=", value, "keyNum");
            return (Criteria) this;
        }

        public Criteria andKeyNumLike(String value) {
            addCriterion("key_num like", value, "keyNum");
            return (Criteria) this;
        }

        public Criteria andKeyNumNotLike(String value) {
            addCriterion("key_num not like", value, "keyNum");
            return (Criteria) this;
        }

        public Criteria andKeyNumIn(List<String> values) {
            addCriterion("key_num in", values, "keyNum");
            return (Criteria) this;
        }

        public Criteria andKeyNumNotIn(List<String> values) {
            addCriterion("key_num not in", values, "keyNum");
            return (Criteria) this;
        }

        public Criteria andKeyNumBetween(String value1, String value2) {
            addCriterion("key_num between", value1, value2, "keyNum");
            return (Criteria) this;
        }

        public Criteria andKeyNumNotBetween(String value1, String value2) {
            addCriterion("key_num not between", value1, value2, "keyNum");
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

        public Criteria andStatusEqualTo(Boolean value) {
            addCriterion("`status` =", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotEqualTo(Boolean value) {
            addCriterion("`status` <>", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusGreaterThan(Boolean value) {
            addCriterion("`status` >", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusGreaterThanOrEqualTo(Boolean value) {
            addCriterion("`status` >=", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusLessThan(Boolean value) {
            addCriterion("`status` <", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusLessThanOrEqualTo(Boolean value) {
            addCriterion("`status` <=", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusIn(List<Boolean> values) {
            addCriterion("`status` in", values, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotIn(List<Boolean> values) {
            addCriterion("`status` not in", values, "status");
            return (Criteria) this;
        }

        public Criteria andStatusBetween(Boolean value1, Boolean value2) {
            addCriterion("`status` between", value1, value2, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotBetween(Boolean value1, Boolean value2) {
            addCriterion("`status` not between", value1, value2, "status");
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