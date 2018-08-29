package com.onlyhi.repository.onlyhiedu.mbg_po;

public class ChannelKey {
    private String adid;

    private Long id;

    public String getAdid() {
        return adid;
    }

    public void setAdid(String adid) {
        this.adid = adid == null ? null : adid.trim();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}