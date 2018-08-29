package com.onlyhi.repository.onlyhiedu.mbg_po;

import java.util.Date;

public class Channel {
    private Long id;

    private String uuid;

    private String name;

    private String level;

    private String adid;

    private String channelKeyword;

    private Integer type;

    private String lpPage;

    private String putLink;

    private String platform;

    private String description;

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

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level == null ? null : level.trim();
    }

    public String getAdid() {
        return adid;
    }

    public void setAdid(String adid) {
        this.adid = adid == null ? null : adid.trim();
    }

    public String getChannelKeyword() {
        return channelKeyword;
    }

    public void setChannelKeyword(String channelKeyword) {
        this.channelKeyword = channelKeyword == null ? null : channelKeyword.trim();
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public String getLpPage() {
        return lpPage;
    }

    public void setLpPage(String lpPage) {
        this.lpPage = lpPage == null ? null : lpPage.trim();
    }

    public String getPutLink() {
        return putLink;
    }

    public void setPutLink(String putLink) {
        this.putLink = putLink == null ? null : putLink.trim();
    }

    public String getPlatform() {
        return platform;
    }

    public void setPlatform(String platform) {
        this.platform = platform == null ? null : platform.trim();
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description == null ? null : description.trim();
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