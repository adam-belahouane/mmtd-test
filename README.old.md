# MMT Digital Front-end Test

Welcome to the MMT Digital Front-end test. This test will give you a chance to showcase your skills as an engineer. You have **24 hours** to complete the test. Once complete, we'll review your implementation, and if successful, you'll be invited to an interview where we'll talk through the implementation and the decisions you made along the way.

Please read the entire document before you get started, to be sure of the requirements of the test:

## The challenge

We would like you to create the following basket:

![The basket](https://slack-imgs.com/?c=1&url=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F42384%2Fscreenshots%2F668649%2Fattachments%2F59014%2Fcart_update_large.png)

Here are some user stories for you to work to:

*Basket-001*  
**As a** user  
**I want** to view my current basket  
**So that** I can see what I've added  

**Given** I am on the basket page  
**When** I view the page  
**Then** I can see all added items and their cost  

*Basket-002*  
**As a** user  
**I want** to change the quantity of a basket item  
**So that** I can decide item totals before purchasing  

**Given** I am on the basket page  
**When** I view the page  
**Then** I can see an item quantity next to each item  

**Given** I am on the basket page  
**When** I view the page  
**Then** I can see each item's total cost (adjusted for quantity)  

**Given** I am on the basket page  
**When** I change an item quantity  
**Then** the item's total cost is adjusted, in real-time  

*Basket-003*  
**As a** user  
**I want** to view my current basket total  
**So that** I can see what I'm going to have to pay  

**Given** I am on the basket page  
**When** I view the page  
**Then** I can see a total cost, accounting for all items and quantities  

*Basket-004*  
**As a** user  
**I want** to remove all items from my basket  
**So that** I can start over  

**Given** I am on the basket page  
**When** I click the "clear" button  
**Then** all items are reset to zero (but remain in the basket)  

## Things we love

* Use of modern JavaScript
* Accurate styling, using modern techniques
* Well-linted, consistent code
* Accessibility considerations
* Frequent Git use with clear commit messages

## Bonus points

* Unit testing
* Progressive enhancement considerations
* Next gen JavaScript, ES+
* Use of types where appropriate

## Getting started

You can use any boilerplate you'd like to for getting started, whether that's one of your own creation or something that already exists.

Don't feel that you need to use any specific frameworks, but focus on what you think is appropriate for the task we've given to you, and the job you're applying for.

## FAQs

#### Am I allowed to Google stuff
It goes without saying. Please work as you normally would during the day.


#### Shall I create branches?
If you normally work with feature branches, we would love to see usage of them. No worries if not.


#### I'm finished early, what now?
Firstly, great work. Here are some enhancements:

* Add VAT calculations
* Add currency choice and conversion rates
* Add a payment step
* Add another theme
* Add a product detail modal for each item
* Find a live API and pull the item's content and title from that
* Incorporate markdown to enable easier content editing
* Optimise for ultimate performance
