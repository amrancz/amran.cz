---
title: "The butterfly effect of design decisions"
date: ""
categories: 
  - "uncategorised"
---

It was Saturday afternoon. My girlfriend was looking at her laptop with a mix of anger and disbelief. What was supposed to be a simple online purchase turned out to be a user experience nightmare.

But it actually started almost a year earlier.

Last year, my girlfriend opened a new bank account with a digital bank in Slovakia. The process of opening the account involved one catch important to our story. It required a Slovak phone number. My girlfriend used her old number on a top-up SIM card for it. She'd seldom use this number and top it up just once or twice a year.

A couple of months ago, she received a message from her network carrier. It said that due to inactivity her SIM card was deactivated. She was quite upset about this. She did receive a warning message about it a few days before saying that she didn't top up her credit for a long time and the card would be deactivated soon. Before she could do it, it was too late.

We tried to find a way to get it activated again but couldn't find any reliable info on this. In the end, we let it go since she barely used the number anyway.

Then about a month ago, my girlfriend wanted to buy her mom a gift. She spent a good hour or two browsing and looking for a great gift. She eventually found a nice shop to buy it from. After another half an hour of actually choosing the gift there, she got to the checkout. And that's when things started to go downhill.

For starters, the checkout form was quite long and there was no sign of required fields. "Hmm, do I have to fill in everything or just what I need?", my girlfriend wondered. She sighed and got into filling it out. As she was nearing the end of the form, a modal window appeared:

_We're sorry but one of the products in your shopping bag just sold out._

"Oh great, now I have to go back and choose a different product!" she exclaimed. "But I already spent so much time filling out this form. I fear that it will be empty when I come back again."

She took her chance and went to find a different product. With success, she returned to checkout after a few minutes. Holding her breath, she expected the form to be empty. Amazingly, it remembered what she filled out. At least something positive about this whole experience. And it turned out to be the last positive thing too.

This was a Slovak shop and the payment was to be made in Euros. My girlfriend wanted to use a card of the bank account (in EUR) she opened last year so that she would save some money by avoiding currency conversion.

When she submitted the checkout form, she was taken to the payment gateway form to enter her card details. By this time, she already spent a few hours on the whole thing.

She completed the payment form and hit Submit. A two-factor authentication screen appeared. There was a 10-minute countdown to enter a code. Code, the screen said, was sent to the phone number used with the bank account.

Yes, that was exactly the phone number that was deactivated earlier "due to inactivity". My girlfriend was looking at the screen and couldn't believe what she was seeing. She had no way of getting the code.

"Maybe there's a second way to complete the authentication? Try looking into the bank's app.", I suggested. The screen didn't say anything about another option but it was worth a shot.

She opened the app and we searched every corner of the app to see if there was any option or setting to do the authentication there instead of the SMS code. No success. The countdown clock was nearing zero.

"You know what, I'll let the countdown go up and then I'll try to make the payment again from the shop using my other card. I'll lose some money on the conversion but I don't care anymore."

The countdown was up. A redirect to the shop started. My girlfriend expected an error message with a button to try the payment again. The shop welcomed her back with a completely different message: _Payment successful_.

"Wait, what? But I didn't complete the payment. Now I'm really confused."

Without the two-factor authentication, there was no way the payment could've been technically completed. It seemed that the whole afternoon would be wasted.

She tried one last thing: check her email. Maybe there would be an explanation to make the payment again. She actually found two messages: One was from the payment gateway informing her of the payment failure. The other was from the shop. A glimpse of hope.

Her order was received and was waiting for payment. At least they got the order. Further down the email was a section with payment instructions. She just wanted to click a button, make the payment with a different card and be done with it.

Alas, there wasn't an option to make a card payment. There were only instructions for a wire transfer.

That was the last straw. My girlfriend closed the laptop and walked away. She was very upset by this whole experience. And who can blame her?

The next day though, she made the wire transfer. It was the only option, after all. Next week, her mom got the gift. A gift she was very happy about. The story got a happy ending.

* * *

This story was about a fairly mundane thing. Shopping online, no big deal, right? Looking at this as a designer, I actually see it as a big deal.

Never before have I seen first hand such a bad user experience. And not just with one service. This included several services and they all seemed to be working together against the user.

This is what happens when design decisions are made with no regard to the whole system. When designers and other decision-makers don't ask themselves "What could go wrong here?". It's a case study of how design decisions create a butterfly effect down the road.

All the bad stuff that happened in this story could've been prevented:

- The network carrier could decide to make it easier to re-active an inactive SIM card. Or they could decide not to deactivate it in the first place.
- The bank could decide to provide alternative options for two-factor authentication.
- The shop could decide to design for a failed payment and provide a proper screen for it. Or at least give the option to pay by card in the order confirmation email.

But they didn't do any of that. And together, it made up for a miserable user experience.

The moral of the story is this: We must consider our design decisions within the broader system. We must ask ourselves "What could go wrong here?"

Because seemingly small and insignificant decisions can have a much bigger impact down the road.
