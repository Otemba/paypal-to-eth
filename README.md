---
title: Otemba
author: Jelle van Wieringen
tags: 'Ethereum, PayPal, Payment provider'
excerpt: Feature list
status: Live
date: '2019-01-06'

---

<p></p><h1 id="welcome-to-otemba">Welcome to Otemba!</h1><p></p>
<p>Non-blocking payment provider for simple Ethereum contracts. It enables easy mining and inspection of Contracts in the Ethereum blockchain for the users of your website. Instead of the need for Ethers it offers a PayPal dialog.</p>
<p>You need basic html-skills like creating a web page, issue ajax calls and the <a href="https://github.com/Otemba/paypal-to-eth/tree/master/mining">interaction with a (pre-defined) json</a>.</p>
<p><a href="https://github.com/Otemba/paypal-to-eth/blob/master/examples/single-page-app">The sample html page</a> is an easy start to begin. It runs on your localhost.</p>
<p>Main characteristics:</p>
<ul>
<li>
Otemba.io offers Create, Read, Update (CRUD) of any Ethereum Contract
</li>
<li>
Read of a Contract is free of cost so no PayPal challenge pops up
</li>
<li>
PayPal payments for interactions with Ethereum, without the need of a crypto currency account for the users of your web page
</li>
<li>
transfer of Ethers via your contract by a "value". You need to compile your own Contract but no Ethers. You may want to use Remix for creating a contract.
</li>
<li>
releases the http socket of the browser and offer non blocking REST interface for your javascript thread. Without that the mining would block connections and your app for minutes because the mining in the Blockchain takes time
</li>
<li>
Lots of testing possibilities for instance by a Ganache instance on Otemba for automated and manual testing without waiting
</li>
</ul>
Create and Update both need payments which is a 3-step process: Create a quote (and a PayPal challenge),  return the PayPal authorization, poll the miners to finish the mining and receive the receipt when they are done.
<h1 id="release-plan">Release plan</h1>
<table>
<thead>
<tr>
<th>Version</th>
<th>Features</th>
<th>Planned</th>
<th>Details</th>
<th>Available</th>
</tr>
</thead>
<tbody>
<tr>
<td>0.0.1</td>
<td>PayPal to Ethereum</td>
<td>6.2018</td>
<td>Initial POC enables CORS</td>
<td><img src="https://github.com/Otemba/paypal-to-eth/blob/master/images/ok.png" alt="done"></td>
</tr>
<tr>
<td>0.0.2</td>
<td>Non blocking dialog</td>
<td>7.2018</td>
<td>Architectural concept</td>
<td><img src="https://github.com/Otemba/paypal-to-eth/blob/master/images/ok.png" alt="done"></td>
</tr>
<tr>
<td>0.0.3</td>
<td>PayPal sandbox</td>
<td>8.2018</td>
<td>For exploratory testing</td>
<td><img src="https://github.com/Otemba/paypal-to-eth/blob/master/images/ok.png" alt="done"></td>
</tr>
<tr>
<td>0.0.4</td>
<td>Skip PayPal dialog</td>
<td>9.2018</td>
<td>For automated testing</td>
<td><img src="https://github.com/Otemba/paypal-to-eth/blob/master/images/ok.png" alt="done"></td>
</tr>
<tr>
<td>0.0.5</td>
<td>TLS (https)</td>
<td>10.2018</td>
<td>Dual server on <a href="http://otemba.io:80">otemba.io:80</a> and <a href="http://otemba.io:443">otemba.io:443</a></td>
<td><img src="https://github.com/Otemba/paypal-to-eth/blob/master/images/ok.png" alt="done"></td>
</tr>
<tr>
<td>0.0.6</td>
<td>Getters</td>
<td>10.2018</td>
<td><a href="https://github.com/Otemba/paypal-to-eth/tree/master/examples/types#inspect-a-mined-contract">Inspect</a> the state of existing Contracts <a href="https://github.com/Otemba/paypal-to-eth/tree/master/examples/types#create-a-new-contract">set</a> at the time of deployment / mining</td>
<td><img src="https://github.com/Otemba/paypal-to-eth/blob/master/images/ok.png" alt="done"></td>
</tr>
<tr>
<td>0.0.7</td>
<td>Value on deploment</td>
<td>11.2018</td>
<td><a href="https://github.com/Otemba/paypal-to-eth/blob/master/examples/value/README.md">Mine a contract and pass value.</a></td>
<td><img src="https://github.com/Otemba/paypal-to-eth/blob/master/images/ok.png" alt="done"></td>
</tr>
<tr>
<td>0.0.8</td>
<td>Setters</td>
<td>12.2018</td>
<td>Change the state of existing Contracts</td>
<td><img src="https://github.com/Otemba/paypal-to-eth/blob/master/images/ok.png" alt="done"></td>
</tr>
<tr>
<td>0.0.9</td>
<td>Vouchers</td>
<td>2.2019</td>
<td>Returning customers and corporate use</td>
<td>In progress</td>
</tr>
</tbody>
</table>

