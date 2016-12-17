---
title: SAFE Signaling Demo
github: https://github.com/maidsafe/safe_examples/tree/master/webrtc_app
last_update: https://safenetforum.org/t/maidsafe-dev-update-november-1-2016/11672
thumbnail: safe-signaling-demo.png
category: Test 11
featured: true
---

Instead of using a centralized video chat service, such as Skype or Google Hangouts – who can track your location, what you are saying, and to whom, you can use the SAFE Network as a secure channel to exchange connectivity information to establish direct peer-to-peer WebRTC connections.

The **SAFE Signaling Demo** lets you set up a room and share the room name with someone you want to talk with. You should be able to connect to one another with video, audio and a small instant messaging feature on the left. You can see yourself on the bottom right, your peer is visible in the center. Enjoy!

For now, only the connection establishment is done using the SAFE Network. The actual connection is either peer-to-peer ([STUN](https://en.wikipedia.org/wiki/STUN)) or via a [TURN](https://en.wikipedia.org/wiki/Traversal_Using_Relays_around_NAT) server. At some point later, we will integrate this functionality directly in [CRUST](https://github.com/maidsafe/crust).

#### Live version

You can access the **SAFE Signaling Demo** at [safe://mediawebrtc.ben](safe://mediawebrtc.ben) using [SAFE Browser v0.4.0](https://github.com/joshuef/beaker/releases/tag/v0.4.0).

#### Tutorial

[Learn how to establish a WebRTC connection using the SAFE Network](https://tutorials.safedev.org/webrtc-video-chat-app/).
