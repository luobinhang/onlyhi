package com.onlyhi.pingxx;

import com.pingplusplus.exception.APIConnectionException;
import com.pingplusplus.exception.APIException;
import com.pingplusplus.exception.AuthenticationException;
import com.pingplusplus.exception.ChannelException;
import com.pingplusplus.exception.InvalidRequestException;
import com.pingplusplus.exception.RateLimitException;
import com.pingplusplus.model.Event;


/**
 *
 * Event 事件参考文档：https://www.pingxx.com/api#api-event
 *
 * 该实例演示如何查询 Event
 *
 * apiKey 有 TestKey 和 LiveKey 两种。
 *
 * TestKey 模式下不会产生真实的交易。
 *
 */
public class EventExample {

    public static void runDemos() {
        EventExample eventExample = new EventExample();
        System.out.println("------- 查询 event -------");

        String eventId = "evt_vTmGHwcHc842hWLRWNS4bwFM";
        eventExample.retrieve(eventId);
    }

    /**
     * 根据 ID 查询 Evnet
     *
     * 传递 Event 的 Id 查询 Event。
     * 参考文档：https://www.pingxx.com/api#api-event-inquiry
     * @param id
     */
    public void retrieve(String id) {
        try {
            Event event = Event.retrieve(id);
            System.out.println(event);

            // 解析 webhooks 可以采用如下方法
//            Object obj = Webhooks.getObject(event.toString());
//            if (obj instanceof Charge) {
//                System.out.println("webhooks 发送了 Charge");
//            } else if (obj instanceof Refund) {
//                System.out.println("webhooks 发送了 Refund");
//            } else if (obj instanceof Summary) {
//                System.out.println("webhooks 发送了 Summary");
//            }
        } catch (AuthenticationException e) {
            e.printStackTrace();
        } catch (InvalidRequestException e) {
            e.printStackTrace();
        } catch (APIConnectionException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        } catch (ChannelException e) {
            e.printStackTrace();
        } catch (RateLimitException e) {
            e.printStackTrace();
        }

    }
}
