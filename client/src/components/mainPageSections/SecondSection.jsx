import React from "react";

import './secondSection.scss'

function SecondSection() {
  return (
    <div className="home-main-zxyaamdfadfa">
      <main className="h-c-page">
        <section className="h-u-mt-l h-u-mb-xl">
          <h2>Finance Data Listing and Disclaimers</h2>
          <div className="description">
            <ul>
              <li>
                A list of all Stock Exchanges, Mutual Funds, Indexes and other
                financial data available in Google products
              </li>
              <li>
                Associated{" "}
                <a href="#disclaimers" data-glue-smooth-scroll="">
                  Disclaimers
                </a>
              </li>
            </ul>
          </div>

          <h3>
            <strong>Exchanges</strong>
          </h3>
          <div className="description">
            <ul>
              {" "}
              <li>
                End of day prices provided by Morningstar. Corporate Actions
                data provided by Thomson Reuters.
              </li>{" "}
              <li>Intra-day data may be provided by ICE Data Services.</li>{" "}
            </ul>
          </div>
          <table className="h-c-table h-c-table--comparisontable-altrows">
            <tbody>
              <tr>
                <th>Region</th>
                <th>Exchange Code</th>
                <th>Description</th>
                <th>Delay (minutes)</th>
              </tr>
              <tr>
                <td rowSpan="13" className="region">
                  Americas
                </td>
                <td>BCBA</td>
                <td>Buenos Aires Stock Exchange</td>
                <td>20</td>
              </tr>

              <tr>
                <td>BVMF</td>
                <td>B3 - Brazil Stock Exchange and Over-the-Counter Market</td>
                <td>15</td>
              </tr>
              <tr>
                <td>CNSX</td>
                <td>Canadian Securities Exchange</td>
                <td>Realtime</td>
              </tr>
              <tr>
                <td>CVE</td>
                <td>Toronto TSX Ventures Exchange</td>
                <td>15</td>
              </tr>
              <tr>
                <td>NASDAQ</td>
                <td>NASDAQ Last Sale</td>
                <td>Realtime *</td>
              </tr>
              <tr>
                <td>BMV</td>
                <td>Mexican Stock Exchange</td>
                <td>20</td>
              </tr>
              <tr>
                <td>NYSE</td>
                <td>NYSE</td>
                <td>Realtime *</td>
              </tr>
              <tr>
                <td>NYSEARCA</td>
                <td>NYSE ARCA</td>
                <td>Realtime *</td>
              </tr>
              <tr>
                <td>NYSEAMERICAN</td>
                <td>NYSE American</td>
                <td>Realtime *</td>
              </tr>
              <tr>
                <td>OPRA</td>
                <td>Options Price Reporting Authority</td>
                <td>15</td>
              </tr>
              <tr>
                <td>OTCBB</td>
                <td>FINRA OTC Bulletin Board</td>
                <td>15</td>
              </tr>
              <tr>
                <td>OTCMKTS</td>
                <td>FINRA Other OTC Issues</td>
                <td>15</td>
              </tr>
              <tr>
                <td>TSE</td>
                <td>Toronto Stock Exchange</td>
                <td>15</td>
              </tr>
              <tr>
                <td rowSpan="21" className="region">
                  Europe
                </td>
                <td>AMS</td>
                <td>Euronext Amsterdam</td>
                <td>15</td>
              </tr>
              <tr>
                <td>BIT</td>
                <td>Borsa Italiana Milan Stock Exchange</td>
                <td>Realtime</td>
              </tr>
              <tr>
                <td>BME</td>
                <td>Bolsas y Mercados Españoles</td>
                <td>15</td>
              </tr>
              <tr>
                <td>CPH</td>
                <td>NASDAQ OMX Copenhagen</td>
                <td>Realtime</td>
              </tr>
              <tr>
                <td>EBR</td>
                <td>Euronext Brussels</td>
                <td>15</td>
              </tr>
              <tr>
                <td>ELI</td>
                <td>Euronext Lisbon</td>
                <td>15</td>
              </tr>
              <tr>
                <td>EPA</td>
                <td>Euronext Paris</td>
                <td>15</td>
              </tr>
              <tr>
                <td>ETR</td>
                <td>Deutsche Börse XETRA</td>
                <td>15</td>
              </tr>
              <tr>
                <td>FRA</td>
                <td>Deutsche Börse Frankfurt Stock Exchange</td>
                <td>Realtime</td>
              </tr>
              <tr>
                <td>HEL</td>
                <td>NASDAQ OMX Helsinki</td>
                <td>Realtime</td>
              </tr>
              <tr>
                <td>ICE</td>
                <td>NASDAQ OMX Iceland</td>
                <td>Realtime</td>
              </tr>
              <tr>
                <td>IST</td>
                <td>Borsa Istanbul</td>
                <td>15</td>
              </tr>
              <tr>
                <td>LON</td>
                <td>London Stock Exchange</td>
                <td>Realtime</td>
              </tr>
              <tr>
                <td>MCX</td>
                <td>Moscow Exchange</td>
                <td>Realtime</td>
              </tr>
              <tr>
                <td>RSE</td>
                <td>NASDAQ OMX Riga</td>
                <td>Realtime</td>
              </tr>
              <tr>
                <td>STO</td>
                <td>NASDAQ OMX Stockholm</td>
                <td>Realtime</td>
              </tr>
              <tr>
                <td>SWX, VTX</td>
                <td>SIX Swiss Exchange</td>
                <td>15</td>
              </tr>
              <tr>
                <td>TAL</td>
                <td>NASDAQ OMX Tallinn</td>
                <td>Realtime</td>
              </tr>
              <tr>
                <td>VIE</td>
                <td>Vienna Stock Exchange</td>
                <td>15</td>
              </tr>
              <tr>
                <td>VSE</td>
                <td>NASDAQ OMX Vilnius</td>
                <td>Realtime</td>
              </tr>
              <tr>
                <td>WSE</td>
                <td>Warsaw Stock Exchange</td>
                <td>15</td>
              </tr>
              <tr>
                <td rowSpan="1" className="region">
                  Africa
                </td>
                <td>JSE</td>
                <td>Johannesburg Stock Exchange</td>
                <td>15</td>
              </tr>
              <tr>
                <td rowSpan="2" className="region">
                  Middle East
                </td>
                <td>TADAWUL</td>
                <td>Saudi Stock Exchange</td>
                <td>15</td>
              </tr>
              <tr>
                <td>TLV</td>
                <td>Tel Aviv Stock Exchange</td>
                <td>20</td>
              </tr>
              <tr>
                <td rowSpan="13" className="region">
                  Asia
                </td>
                <td>BKK</td>
                <td>Thailand Stock Exchange</td>
                <td>15</td>
              </tr>
              <tr>
                <td>BOM</td>
                <td>Bombay Stock Exchange Limited</td>
                <td>Realtime</td>
              </tr>
              <tr>
                <td>KLSE</td>
                <td>Bursa Malaysia</td>
                <td>15</td>
              </tr>
              <tr>
                <td>HKG</td>
                <td>Hong Kong Stock Exchange</td>
                <td>15</td>
              </tr>
              <tr>
                <td>IDX</td>
                <td>Indonesia Stock Exchange</td>
                <td>10</td>
              </tr>
              <tr>
                <td>KOSDAQ</td>
                <td>KOSDAQ</td>
                <td>20</td>
              </tr>
              <tr>
                <td>KRX</td>
                <td>Korea Stock Exchange</td>
                <td>20</td>
              </tr>
              <tr>
                <td>NSE</td>
                <td>National Stock Exchange of India</td>
                <td>Realtime</td>
              </tr>
              <tr>
                <td>SGX</td>
                <td>Singapore Exchange</td>
                <td>Realtime</td>
              </tr>
              <tr>
                <td>SHA</td>
                <td>Shanghai Stock Exchange</td>
                <td>1</td>
              </tr>
              <tr>
                <td>SHE</td>
                <td>Shenzhen Stock Exchange</td>
                <td>Realtime</td>
              </tr>
              <tr>
                <td>TPE</td>
                <td>Taiwan Stock Exchange</td>
                <td>Realtime</td>
              </tr>
              <tr>
                <td>TYO</td>
                <td>Tokyo Stock Exchange</td>
                <td>20</td>
              </tr>
              <tr>
                <td rowSpan="2" className="region">
                  South Pacific
                </td>
                <td>ASX</td>
                <td>Australian Securities Exchange</td>
                <td>20</td>
              </tr>
              <tr>
                <td>NZE</td>
                <td>New Zealand Stock Exchange</td>
                <td>20</td>
              </tr>
            </tbody>
          </table>
          <div className="description">
            <ul>
              <li>
                *Real-time price data represents trades which execute on the
                NASDAQ and NYSE exchanges. Volume information, as well as price
                data for trades that don’t execute on those exchanges, are
                consolidated and delayed by 15 minutes.
              </li>
            </ul>
          </div>
          <h3>
            <strong>Mutual Funds</strong>
          </h3>
          <div className="description">
            <ul>
              {" "}
              <li>Mutual fund prices provided by Morningstar.</li>{" "}
            </ul>
          </div>
          <table className="h-c-table h-c-table--comparisontable-altrows">
            <tbody>
              <tr>
                <th>Region</th>
                <th>Exchange Code</th>
                <th>Description</th>
                <th>Delay (minutes)</th>
              </tr>
              <tr>
                <td rowSpan="1" className="region">
                  Americas
                </td>
                <td>MUTF</td>
                <td>USA Mutual Funds</td>
                <td>End-of-day</td>
              </tr>
              <tr>
                <td rowSpan="1" className="region">
                  Asia
                </td>
                <td>MUTF_IN</td>
                <td>India Mutual Funds</td>
                <td>End-of-day</td>
              </tr>
            </tbody>
          </table>

          <h3>
            <strong>Indexes</strong>
          </h3>
          <div className="description">
            <ul>
              {" "}
              <li>End of day prices provided by Morningstar.</li>{" "}
              <li>Intra-day data may be provided by ICE Data Services.</li>{" "}
            </ul>
          </div>
          <table className="h-c-table h-c-table--comparisontable-altrows">
            <tbody>
              <tr>
                <th>Region</th>
                <th>Exchange Code</th>
                <th>Description</th>
                <th>Delay (minutes)</th>
              </tr>
              <tr>
                <td rowSpan="11" className="region">
                  Americas
                </td>
                <td>INDEXBVMF</td>
                <td>
                  B3 - Brazil Stock Exchange and Over-the-Counter Market Indexes
                </td>
                <td>15</td>
              </tr>
              <tr>
                <td>INDEXCBOE</td>
                <td>CBOE Index Values</td>
                <td>15</td>
              </tr>
              <tr>
                <td>INDEXCME</td>
                <td>Chicago Mercantile Exchange Indexes</td>
                <td>Realtime</td>
              </tr>
              <tr>
                <td>INDEXDJX</td>
                <td>S&amp;P Dow Jones Indices</td>
                <td>Realtime</td>
              </tr>
              <tr>
                <td>INDEXNASDAQ</td>
                <td>NASDAQ Global Indexes</td>
                <td>Realtime</td>
              </tr>
              <tr>
                <td>INDEXNYSEGIS</td>
                <td>NYSE Global Index Feed</td>
                <td>15</td>
              </tr>
              <tr>
                <td>INDEXRUSSELL</td>
                <td>Russell Tick</td>
                <td>15</td>
              </tr>
              <tr>
                <td>INDEXSP</td>
                <td>S&amp;P Cash Indexes</td>
                <td>Realtime</td>
              </tr>
              <tr>
                <td>BCBA</td>
                <td>Buenos Aires Stock Exchange Indexes</td>
                <td>20</td>
              </tr>
              <tr>
                <td>INDEXBMV</td>
                <td>Mexican Stock Exchange Indexes</td>
                <td>20</td>
              </tr>
              <tr>
                <td>INDEXTSI</td>
                <td>Toronto Stock Exchange Indexes</td>
                <td>15</td>
              </tr>
              <tr>
                <td rowSpan="11" className="region">
                  Europe
                </td>
                <td>INDEXBIT</td>
                <td>Milan Stock Exchange Indexes</td>
                <td>15</td>
              </tr>
              <tr>
                <td>INDEXBME</td>
                <td>Bolsas y Mercados Españoles Indexes</td>
                <td>15</td>
              </tr>
              <tr>
                <td>INDEXDB</td>
                <td>Deutsche Börse Indexes</td>
                <td>15</td>
              </tr>
              <tr>
                <td>INDEXEURO</td>
                <td>Euronext Indexes</td>
                <td>15</td>
              </tr>
              <tr>
                <td>INDEXFTSE</td>
                <td>FTSE Indexes</td>
                <td>Realtime</td>
              </tr>
              <tr>
                <td>INDEXIST</td>
                <td>Borsa Istanbul Indexes</td>
                <td>15</td>
              </tr>
              <tr>
                <td>INDEXNASDAQ</td>
                <td>NASDAQ Global Indexes</td>
                <td>Realtime</td>
              </tr>
              <tr>
                <td>INDEXSTOXX</td>
                <td>STOXX Indexes</td>
                <td>15</td>
              </tr>
              <tr>
                <td>INDEXSWX</td>
                <td>SIX Swiss Exchange Indexes</td>
                <td>15</td>
              </tr>
              <tr>
                <td>INDEXVIE</td>
                <td>Wiener Börse Indexes</td>
                <td>15</td>
              </tr>
              <tr>
                <td>MCX</td>
                <td>Moscow Exchange Indexes</td>
                <td>Realtime</td>
              </tr>
              <tr>
                <td rowSpan="14" className="region">
                  Asia
                </td>
                <td>INDEXBKK</td>
                <td>Thailand Stock Exchange Indexes</td>
                <td>15</td>
              </tr>
              <tr>
                <td>INDEXBOM</td>
                <td>Bombay Stock Exchange Indexes</td>
                <td>Realtime</td>
              </tr>
              <tr>
                <td>SHA</td>
                <td>Shanghai/Shenzhen Indexes</td>
                <td>1</td>
              </tr>
              <tr>
                <td>INDEXHANGSENG</td>
                <td>Hang Seng Indexes</td>
                <td>Realtime</td>
              </tr>
              <tr>
                <td>HKG</td>
                <td>Hong Kong Stock Exchange Indexes</td>
                <td>15</td>
              </tr>
              <tr>
                <td>KOSDAQ, KRX</td>
                <td>Korea Stock Exchange Indexes</td>
                <td>20</td>
              </tr>
              <tr>
                <td>INDEXNIKKEI</td>
                <td>Nikkei Indexes</td>
                <td>20</td>
              </tr>
              <tr>
                <td>INDEXTYO</td>
                <td>Tokyo Indexes</td>
                <td>20</td>
              </tr>
              <tr>
                <td>INDEXTYO:JPXNIKKEI400</td>
                <td>
                  © Japan Exchange Group, Inc., Tokyo Stock Exchange, Inc.,
                  Nikkei Inc.
                </td>
                <td>20</td>
              </tr>
              <tr>
                <td>INDEXTOPIX</td>
                <td>Tokyo Stock Exchange Indexes</td>
                <td>20</td>
              </tr>
              <tr>
                <td>IDX</td>
                <td>Indonesia Stock Exchange Indexes</td>
                <td>15</td>
              </tr>
              <tr>
                <td>NSE</td>
                <td>National Stock Exchange of India Indexes</td>
                <td>Realtime</td>
              </tr>
              <tr>
                <td>SHE</td>
                <td>Shenzhen Stock Exchange Indexes</td>
                <td>Realtime</td>
              </tr>
              <tr>
                <td>TPE</td>
                <td>Taiwan Stock Exchange Indexes</td>
                <td>Realtime</td>
              </tr>
              <tr>
                <td rowSpan="2" className="region">
                  Middle East
                </td>
                <td>TLV</td>
                <td>Tel Aviv Stock Exchange Indexes</td>
                <td>20</td>
              </tr>
              <tr>
                <td>TADAWUL</td>
                <td>Saudi Stock Exchange Indexes</td>
                <td>15</td>
              </tr>
              <tr>
                <td rowSpan="2" className="region">
                  South Pacific
                </td>
                <td>INDEXASX</td>
                <td>Australian Securities Exchange S&amp;P/ASX Indexes</td>
                <td>Realtime</td>
              </tr>
              <tr>
                <td>INDEXNZE</td>
                <td>New Zealand Exchange Indexes</td>
                <td>20</td>
              </tr>
            </tbody>
          </table>

          <h3>
            <strong>Bonds</strong>
          </h3>

          <table className="h-c-table h-c-table--comparisontable-altrows">
            <tbody>
              <tr>
                <th>Region</th>
                <th>Exchange Code</th>
                <th>Description</th>
                <th>Delay (minutes)</th>
              </tr>
              <tr>
                <td rowSpan="1" className="region">
                  United States
                </td>
                <td></td>
                <td>KCG Bondpoint</td>
                <td>15</td>
              </tr>
            </tbody>
          </table>

          <h3>
            <strong>Currencies</strong>
          </h3>

          <table className="h-c-table h-c-table--comparisontable-altrows">
            <tbody>
              <tr>
                <th>Region</th>
                <th>Exchange Code</th>
                <th>Description</th>
                <th>Delay (minutes)</th>
              </tr>
              <tr>
                <td rowSpan="2" className="region">
                  Global
                </td>
                <td>CURRENCY</td>
                <td>Morningstar</td>
                <td>3</td>
              </tr>
              <tr>
                <td>CRYPTOCURRENCY</td>
                <td>Coinbase, Inc.</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>

          <h3 id="disclaimers">
            <strong>Disclaimers</strong>
          </h3>
          <div>
            <p>
              All data and information is provided “as is” for personal
              informational purposes only, and is not intended for trading
              purposes or investment, tax, legal, accounting or other advice.
              Please consult your broker or financial representative to verify
              pricing before executing any trade. Google is not an investment
              adviser. None of the data and information constitutes a
              recommendation by Google to buy, sell or hold any security or
              financial product, and Google makes no representation regarding
              the advisability or suitability of any investment.
            </p>
            <p>
              Data is provided by financial exchanges and other content
              providers and may be delayed as specified by financial exchanges
              or other data providers. Google does not verify any data and
              disclaims any obligation to do so.
            </p>
            <p>
              Google, its data or content providers, the financial exchanges and
              each of their affiliates and business partners (A) expressly
              disclaim the accuracy, adequacy, or completeness of any data and
              (B) shall not be liable for any errors, omissions or other defects
              in, delays or interruptions in such data, or for any actions taken
              in reliance thereon. Neither Google nor any of our information
              providers will be liable for any damages relating to your use of
              the information provided herein. As used here, “business partners”
              does not refer to an agency, partnership, or joint venture
              relationship between Google and any such parties.
            </p>
            <p>
              You agree not to copy, modify, reformat, download, store,
              reproduce, reprocess, transmit or redistribute any data or
              information found herein or use any such data or information in a
              commercial enterprise without obtaining prior written consent.
            </p>
            <p>
              Either Google or its third party data or content providers have
              exclusive proprietary rights in the data and information provided.
            </p>
            <p>
              Please find all listed exchanges and indices covered by Google
              along with their respective time delays from the table above.
            </p>
            <p>
              Advertisements presented on Google Finance are solely the
              responsibility of the party from whom the ad originates. Neither
              Google nor any of its data licensors endorses or is responsible
              for the content of any advertisement or any goods or services
              offered therein.
            </p>
          </div>

          <h3>
            <strong>Currency Conversion</strong>
          </h3>
          <div>
            <p>
              Google cannot guarantee the accuracy of the exchange rates
              displayed. You should confirm current rates before making any
              transactions that could be affected by changes in the exchange
              rates.
            </p>
          </div>

          <h3>
            <strong>NYSE Securities</strong>
          </h3>
          <div>
            <p>
              NYSE, NYSE Arca LLC, and NYSE MKT LLC reserve all rights to the
              securities information that Google LLC makes available to you. You
              understand and acknowledge that such securities information does
              not reflect trading activity on markets other than NYSE, NYSE
              Arca, or NYSE MKT, as applicable, and are intended to provide you
              with a reference point only, rather than as a basis for making
              trading decisions. None of Google LLC, NYSE, NYSE Arca LLC, and
              NYSE MKT LLC guarantee such information nor shall any of them be
              liable for any loss due either to their negligence or to any cause
              beyond their reasonable control. Any redistribution of such
              information is strictly prohibited.
            </p>
          </div>

          <h3>
            <strong>S&amp;P Capital IQ</strong>
          </h3>
          <div>
            <p>
              S&amp;P Global Market Intelligence provided by S&amp;P Capital IQ.
              Copyright (c) 2020, S&amp;P Capital IQ (and its affiliates, as
              applicable). All rights reserved.
            </p>
          </div>

          <h3>
            <strong>S&amp;P Dow Jones Indices LLC</strong>
          </h3>
          <div>
            <p>
              Copyright © 2020, S&amp;P Dow Jones Indices LLC. All rights
              reserved. S&amp;P does not guarantee the accuracy, adequacy,
              completeness or availability of any information and is not
              responsible for any errors or omissions, regardless of the cause
              or for the results obtained from the use of such information.
              S&amp;P, its affiliates and their third party suppliers disclaim
              any and all express or implied warranties, including, but not
              limited to, any warranties of merchantability or fitness for a
              particular purpose or use. S&amp;P DJI Indices are not investment
              advice and a reference to a particular investment or security, a
              credit rating or any observation concerning a security or
              investment provided in S&amp;P DJI Indices are not a
              recommendation to buy, sell or hold such investment or security or
              make any other investment decisions. In no event shall S&amp;P be
              liable for any direct, indirect, special or consequential damages,
              costs, expenses, legal fees, or losses (including lost income or
              lost profit and opportunity costs) in connection with your or
              others’ use of the S&amp;P DJI Indices.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SecondSection;
