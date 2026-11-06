// Recovery attempt log. Newest entries go at the bottom.
// No personal data here: IDs are masked, names/emails/phone numbers are left out.
//
// outcome: "rejected" | "blocked" | "no-help" | "no-reply" | "pending" | "success"
window.ATTEMPTS = [
  {
    date: "2026-05-31",
    channel: "In-game Account Recovery tool",
    title: "Recovery application #1",
    ref: "Application …6493",
    what: "First claim submitted through Login screen → Help → Account Recovery, answering the ownership questionnaire from memory.",
    response: "No result email was received. Customer service later confirmed (3 June) that the claim had failed.",
    reason: "Verification failed: answers judged incorrect, or the claim was sent from a device the account did not commonly use.",
    outcome: "rejected"
  },
  {
    date: "2026-06-02",
    channel: "Email (Russian)",
    title: "Full written request to customer service and the publisher",
    ref: "Helpdesk tickets …4815, …4817",
    what: "Long email describing the loss of the account, with nine screenshots and one video: nickname history, first season played, peak rank and the date it was reached, devices used, countries played from.",
    response: "The message was routed to the Korea-region mobile help desk. Within a minute an automatic reply said the request could not be understood, asked for screenshots and a nickname, and suggested writing in Korean.",
    reason: "Wrong regional desk; non-Korean requests are not handled there.",
    outcome: "no-help"
  },
  {
    date: "2026-06-02",
    channel: "Email (English)",
    title: "Same request re-sent in English",
    ref: "Helpdesk ticket …4868",
    what: "The request was rewritten in English and sent three times within twenty minutes to the customer service address and the help-desk reply addresses.",
    response: "The identical Korea-desk template came back.",
    reason: "Same regional desk, same canned reply.",
    outcome: "no-help"
  },
  {
    date: "2026-06-02",
    channel: "Email (Korean)",
    title: "Request re-sent in Korean",
    ref: "",
    what: "Following the help desk's own suggestion, the request was translated into Korean and sent again with the evidence attached.",
    response: "No reply.",
    reason: "None given.",
    outcome: "no-reply"
  },
  {
    date: "2026-06-02",
    endDate: "2026-06-03",
    channel: "Email thread with customer service",
    title: "Customer service points back to the recovery tool",
    ref: "Application …6493",
    what: "Customer service answered the original email. The player replied that the tool keeps rejecting the claims, then supplied the application number when asked.",
    response: "Three replies over two days: (1) use the in-game Account Recovery tool, review takes 7–10 business days, submit from the usual device; (2) a previous claim exists, please send its number; (3) that claim failed verification, a new one can be filed 7 days after a rejection.",
    reason: "Failed questionnaire answers or an unusual device. Support said the account team cannot act on the account while verification is failed.",
    outcome: "rejected"
  },
  {
    date: "2026-06-07",
    channel: "In-game Account Recovery tool + email",
    title: "Recovery application #2 and a request for manual review",
    ref: "Application …8212",
    what: "Second claim filed as soon as the 7-day cooldown ended. An email was sent the same evening asking a human agent to review it against purchase history, linked social accounts and login history.",
    response: "No direct answer to the manual-review email. The claim was rejected.",
    reason: "Reported as insufficient information.",
    outcome: "rejected"
  },
  {
    date: "2026-06-09",
    endDate: "2026-06-10",
    channel: "Email (Russian)",
    title: "Detailed ownership dossier sent to customer service",
    ref: "",
    what: "A structured list of everything known about the account: nickname history, first season, peak rank and date, a title and the date it was earned, server, language, country of registration, in-game birthday, usual avatar, pet, favourite map and vehicle, a frequent teammate, purchase history, devices, and the phone number and social account that used to be linked.",
    response: "Next day: the same template as on 3 June. Verification previously failed, wait 7 days and use the recovery tool again.",
    reason: "Failed questionnaire answers or an unusual device. The extra evidence in the email was not addressed.",
    outcome: "rejected"
  },
  {
    date: "2026-06-14",
    endDate: "2026-06-17",
    channel: "In-game Account Recovery tool",
    title: "Recovery application #3",
    ref: "Application …1596",
    what: "Third claim. The current email address was verified by code and the questionnaire was filled in again.",
    response: "Result email three days later: the application was not approved. It advised resubmitting with complete and accurate information, and contacting customer service if claims keep being rejected. A one-word reply asking why bounced, because the sender is a no-reply address.",
    reason: "None given in the result email.",
    outcome: "rejected"
  },
  {
    date: "2026-06-22",
    endDate: "2026-06-24",
    channel: "In-game Account Recovery tool + email",
    title: "Recovery application #4 and a second request for manual review",
    ref: "Application …9476",
    what: "Fourth claim, followed minutes later by an email to two support addresses asking for a human review and listing the proof available: store purchase history with order IDs, receipts, old screenshots and videos, the previously linked phone number and earlier email addresses.",
    response: "Customer service first said no claim record could be found for the account and asked for a screenshot of the confirmation email, which was sent. The next day the result email arrived: not approved.",
    reason: "None given in the result email.",
    outcome: "rejected"
  },
  {
    date: "2026-06-24",
    endDate: "2026-06-25",
    channel: "Email thread with customer service",
    title: "Asking for a human to look at the next claim",
    ref: "Application …9476",
    what: "After the fourth rejection the player asked that the next claim be checked by a support specialist as well as the automatic system, offering nine store purchase receipts, the old linked phone number and earlier email addresses.",
    response: "Support explained that the questionnaire is built from the account's private data (commonly used devices, login regions, past top-up orders), then repeated the rejection template and added that filing a claim does not guarantee success.",
    reason: "Failed questionnaire answers or a less-used device. The request for manual review was not acknowledged.",
    outcome: "rejected"
  },
  {
    date: "2026-11-01",
    channel: "In-game Account Recovery tool",
    title: "Recovery application #5 blocked before submission",
    ref: "",
    what: "Fifth claim prepared from the owner's usual iPad, without a VPN but away from home on another Wi-Fi network: answered the opening questions (cannot log in, account was taken, 6–12 months ago) and filled in the account-history form.",
    response: "Before the claim could be sent, the tool showed a message that unusual activity had been detected in the current environment and that the claim must be filed from the primary device. The only button was Exit. A second try after turning off iCloud Private Relay and IP-tracking protection got the same message.",
    reason: "Unusual activity in the current environment. This was the same iPad the account was played on until March 2026.",
    outcome: "blocked"
  },
  {
    date: "2026-11-02",
    channel: "In-game Account Recovery tool",
    title: "Recovery application #5",
    ref: "Application …9187",
    what: "Filed from the owner's iPad on home Wi-Fi. The tool again flagged unusual activity, then allowed the claim after verification by code. The owner passed a short quiz on official addresses and websites, chose full recovery (unbind every current login method), and completed the 21-question form: last login, devices, regions, previously linked email and phone, nickname history, ranks, teammates, eight top-ups with dates and amounts, registration month and device. Two long free-text answers covered the timeline of the loss and a list of all Google Play order numbers.",
    response: "Confirmation email received the same evening. A follow-up email to customer service the same evening corrected two small mistakes in the form (one purchase date and the registration month) and asked for the claim to be checked by a specialist.",
    reason: "Result email on 4 November: not approved, no reason given. The same morning customer service answered the follow-up email with the usual template: the claim failed because answers were judged incorrect or a less-used device was used, and a new claim can be filed 7 days after a rejection. The owner replied asking which answers were wrong.",
    outcome: "rejected"
  },
  {
    date: "2026-11-04",
    channel: "Email thread with customer service",
    title: "Detailed description after repeated rejections",
    ref: "Applications …6493, …8212, …1596, …9476, …9187",
    what: "Following the advice in the rejection email to contact customer service with a detailed description when claims keep failing, the owner sent a structured message: all five claim numbers, what happened, why the automatic check likely fails (most required questions ask about the last six months, when the account was used by the other person on his device), the evidence available, and a request for a manual review by the account security team based on the history before 7 March 2026. A second message the same afternoon carried all 20 evidence screenshots, each listed with what it shows.",
    response: "Two days later customer service replied with a general explanation: the verification questions (frequently used devices, login regions, past top-up orders) come from the account's private data, so support cannot see or share the expected answers; a new claim can be filed 7 days after a rejection. The request for a manual review and the screenshots were not addressed.",
    reason: "Support says it cannot check claims manually or reveal which answers were wrong, citing privacy rules.",
    outcome: "no-help"
  },
  {
    date: "2026-11-06",
    channel: "Email to the publisher's data protection officer",
    title: "GDPR data access request",
    ref: "",
    what: "Because customer service says the data behind the automatic check is private, the owner (an EU resident) sent a formal request under the GDPR to the publisher's data protection officer: a copy of the account's login history, the history of changes to linked login methods, purchase history and the records of the five claims (Art. 15), and human review of the automated recovery decision (Art. 22). Ownership evidence was listed; no passwords were sent.",
    response: "Awaiting reply. The legal deadline is one month (6 December 2026), extendable with a stated reason.",
    reason: "Pending.",
    outcome: "pending"
  }
];
