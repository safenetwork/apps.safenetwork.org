---
title: SAFE Comment Tutorial
github: https://github.com/maidsafe/safe_examples
last_update: https://safenetforum.org/t/maidsafe-dev-update-october-18-2016-test-11/11562
thumbnail: safe-comment-tutorial.png
category: Test 11
featured: true
---

The new API functionalities of SAFE Launcher enable developers to build apps with dynamic content. To showcase these features we are providing a tutorial that enables users to comment on content using their [public name](https://api.safedev.org/dns/). This tutorial uses Public Appendable Data. Website owners can delete comments and block/unblock users. The ability to block users is enabled by the `filter` field of Appendable Data. For this tutorial, we use a blacklist (as opposed to a whitelist). Everyone except the keys (people) listed in the filter will be allowed to comment (append data).

#### Download

- [Download editable_comments_plugin.zip](https://github.com/maidsafe/safe_examples/releases/tag/0.10.0)
- [Download permanent_comments_plugin.zip](https://github.com/maidsafe/safe_examples/releases/tag/0.10.0)

#### Tutorial

[Learn how to enable comments on your SAFE website](https://tutorials.safedev.org/website-with-comments/).
