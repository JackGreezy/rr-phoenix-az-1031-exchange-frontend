export type LocationRichSection = {
  heading?: string;
  html: string;
};

export type LocationRichFaq = {
  question: string;
  answer: string;
};

export type LocationRichContent = {
  /** 4-6 unique-per-city market sections rendered between the intro description and the FAQ block. */
  sections: LocationRichSection[];
  /** 5 substantive, location-specific FAQs. Overrides the base location.faq / batchData.faqs when present. */
  faqs: LocationRichFaq[];
};

export const locationRichContent: Record<string, LocationRichContent> = {
  phoenix: {
    sections: [
      {
        html: "<p>Phoenix is the one submarket in this metro that does not have a single identity. It carries downtown high-rise office, Midtown medical and creative space, Camelback Corridor finance towers, and Sky Harbor-adjacent industrial and air cargo, all inside one city boundary, and each of those pockets trades on its own logic. A seller here is rarely exiting into just one demand driver, and a buyer replacing into Phoenix needs to know which of these submarkets a given listing actually belongs to before comparing it to anything else on a shortlist.</p>",
      },
      {
        heading: "The Camelback Corridor Still Sets the Ceiling for Phoenix Office Rents",
        html: "<p>The stretch of office towers along Camelback Road between roughly 16th and 24th Streets has carried the city's premium financial, legal, and professional-services tenants for decades, and rents there still price above anything downtown or in Midtown can command. A buyer should confirm how much of a Camelback building's roster is genuinely investment-grade tenant credit versus smaller regional firms riding the address, since the two carry meaningfully different renewal risk even in the same building.</p><p>Tenant improvement allowances in this corridor also run higher than the Valley average, since incoming tenants expect a finish level that matches the address. A buyer underwriting a near-term rollover should budget for that cost rather than assuming a light refresh will hold a Camelback-quality tenant.</p>",
      },
      {
        heading: "Downtown and Midtown Are Recovering on Different Timelines",
        html: "<p>Downtown high-rise office is still working through post-2020 occupancy softness, and a buyer should pull current physical occupancy rather than leased square footage before underwriting any downtown tower, since the gap between the two numbers can be wide. Midtown has fared better, largely on the strength of medical and biomedical tenants clustered around the hospital campuses and the growing bioscience presence near the Central Avenue corridor, where lab-capable buildouts have kept vacancy tighter than the downtown towers a few miles south.</p><p>A seller marketing a Midtown medical office building should expect a deeper, steadier buyer pool than a comparable downtown office seller, simply because that tenant base has proven more durable through the recent cycle.</p>",
      },
      {
        heading: "Sky Harbor Drives Air Cargo and Last-Mile Industrial Demand",
        html: "<p>Industrial land and buildings ringing Sky Harbor International Airport serve air cargo, freight forwarding, and last-mile distribution tenants who need to sit close to the runway, and this stock trades to a different buyer pool than the bulk distribution product farther out in the West Valley. A buyer should ask specifically about FAA height restrictions and any airport-authority easements before assuming a parcel can be built to the same specs as a comparable site elsewhere in the metro.</p>",
      },
      {
        heading: "Deer Valley and the North Loop 101 Corridor Are Phoenix's Newest Industrial Frontier",
        html: "<p>Far north Phoenix, particularly around Deer Valley Airport and the Loop 101 corridor near I-17, has absorbed a wave of advanced manufacturing and supply-chain tenants drawn in part by the semiconductor investment landing in the northern Valley, and industrial land pricing there has moved up accordingly over the past several years. A buyer identifying replacement property in this corridor should confirm power capacity and water availability early, since some parcels here still need real infrastructure work before a tenant can occupy. Replacement candidates a Phoenix seller will typically see across the city include:</p><ul><li>Class A and B office towers along the Camelback Corridor</li><li>Medical and lab-capable office in Midtown near the hospital campuses</li><li>Air cargo and last-mile industrial buildings near Sky Harbor</li><li>Advanced manufacturing and flex space near Deer Valley Airport and the Loop 101</li><li>Grocery-anchored and net lease retail serving Phoenix's older, built-out neighborhoods</li></ul>",
      },
      {
        heading: "Identification Strategy Should Match Which Phoenix You Are Exiting",
        html: "<p>A seller exiting a Camelback Corridor office building is usually chasing a deep, well-understood buyer pool and can often build a tighter three-property list, since comparable Class A office trades fairly often across the Valley. A seller exiting Sky Harbor-adjacent industrial or Deer Valley manufacturing land typically benefits more from the 200% rule, naming a broader mix of industrial, land, and DST candidates, since that stock trades in smaller volume and a like-for-like match is not always available inside the identification window.</p><p>Because Phoenix spans so many submarkets under one city name, I generally tell sellers to be explicit about which submarket a candidate property sits in when building an identification list, rather than assuming every listing labeled \"Phoenix\" behaves the same way.</p>",
      },
    ],
    faqs: [
      {
        question: "How does Camelback Corridor office pricing compare to downtown Phoenix office?",
        answer: "Camelback Corridor rents typically price above both downtown and Midtown, reflecting decades of financial and professional-services tenant demand. A buyer should still verify how much of a building's roster is genuine investment-grade credit versus smaller regional firms before assuming that premium address guarantees stable income.",
      },
      {
        question: "What should a buyer check before replacing into Sky Harbor-adjacent industrial property?",
        answer: "Confirm FAA height restrictions and any airport-authority easements on the specific parcel before assuming it can be built or used the same way as comparable industrial land elsewhere in the metro. Air cargo and last-mile tenants also have specific dock and clearance requirements worth verifying early.",
      },
      {
        question: "Why has industrial land near Deer Valley and the Loop 101 appreciated so much?",
        answer: "Advanced manufacturing and supply-chain tenants have moved into the far north Valley in part because of nearby semiconductor investment, and land pricing has followed. A buyer should still confirm power capacity and water availability on any specific parcel, since infrastructure has not caught up everywhere in this corridor.",
      },
      {
        question: "Should my identification list look different depending on which part of Phoenix I'm exiting?",
        answer: "Generally yes. A Camelback Corridor office exit can often work with a tighter three-property list since that product trades fairly often, while an exit from Sky Harbor industrial or Deer Valley land usually benefits from the 200% rule and a broader mix of candidates, since that stock trades in smaller volume.",
      },
      {
        question: "Can 1031 Exchange of Phoenix confirm whether my Phoenix property qualifies for a 1031 exchange?",
        answer: "No. This service coordinates identification, lender scheduling, and communication among the investor's advisors. Whether a specific transaction and property qualify as like-kind is a determination made by the investor's own tax advisor and qualified intermediary.",
      },
    ],
  },
  chandler: {
    sections: [
      {
        html: "<p>Chandler runs on a semiconductor and technology employment base that most other Phoenix suburbs do not have, and that base shapes every property type in the city, retail and multifamily included, well beyond the office towers. A seller here is usually selling into demand created by that employment base rather than raw population growth alone, and a buyer should underwrite it that way. That employment base has also proven resilient through prior downturns, which gives Chandler sellers a somewhat stronger negotiating position than sellers in submarkets more exposed to a single struggling industry.</p>",
      },
      {
        heading: "The Price Road Corridor Sets the Tone for Chandler Office",
        html: "<p>Large technology and financial services campuses along the Price Road corridor have pulled a deep bench of professional-services tenants into surrounding office buildings, and that demand has kept Chandler office occupancy healthier than in some older Phoenix submarkets. A buyer replacing into this corridor should still check tenant concentration carefully, since a building leaning heavily on one or two large technology tenants carries different risk than a diversified multi-tenant building.</p><p>Ask for the lease expiration schedule broken out tenant by tenant rather than a single blended weighted-average lease term, since a single large renewal decision can move a building's value more than the average number suggests.</p>",
      },
      {
        heading: "Multifamily Near the Tech Campuses Commands a Real Premium",
        html: "<p>Apartment communities within an easy commute of the Ocotillo semiconductor campus and the Price Road corridor lease up faster and at higher rents than comparable product farther from those employers, which shows up directly in cap rates. A buyer should confirm how much of a property's renter base actually works in that corridor versus how much is drawn from the broader Southeast Valley commuter pool, since that mix affects how the asset performs if any single employer slows hiring.</p><p>A rent roll heavy with month-to-month tenants tied to a single employer's contract workforce carries more turnover risk than one built on longer-term leases, and that distinction is worth pulling out of the property manager's records rather than assuming from the headline occupancy number.</p>",
      },
      {
        heading: "Retail Splits Between Destination Centers and Neighborhood Strips",
        html: "<p>Chandler Fashion Center and the retail built up around it pull shoppers from well beyond city limits and price accordingly, while smaller neighborhood strip centers scattered through the rest of the city depend on local rooftops and a tighter trade area. Treating a destination center and a neighborhood strip as interchangeable replacement candidates is a mistake, since their tenant mix, lease terms, and risk profile rarely match.</p>",
      },
      {
        heading: "Downtown Chandler Redevelopment Has Created a New Micro-Market",
        html: "<p>Downtown Chandler's ongoing redevelopment around the historic core has brought in boutique retail, restaurants, and small office space that trades on a different basis than the corporate corridor a few miles away. Pricing there reflects redevelopment momentum as much as current income, so a buyer should discount pro forma numbers that assume the district's newest tenants will perform like long-established ones.</p><p>Replacement candidates a buyer will typically see in this submarket include:</p><ul><li>Multi-tenant office along the Price Road technology corridor</li><li>Class A and B apartment communities near the Ocotillo campus</li><li>Net lease and grocery-anchored retail near Chandler Fashion Center</li><li>Boutique retail and restaurant space in the downtown redevelopment district</li><li>Medical office serving the growing southeast residential base</li></ul>",
      },
      {
        heading: "Identification Strategy Should Track Employer Concentration",
        html: "<p>A seller exiting a property with heavy exposure to one large technology employer should build a replacement list that diversifies that risk, often using the 200% rule to include retail, medical office, and DST candidates alongside a like-for-like office or multifamily option, rather than replacing one concentrated exposure with another.</p><p>This is one of the more common questions I get from Chandler sellers, and the honest answer is that a diversified replacement usually beats a like-for-like swap into another single-employer building, even if the cap rate looks a little less attractive on paper.</p>",
      },
    ],
    faqs: [
      {
        question: "How does the Price Road technology corridor affect Chandler office underwriting?",
        answer: "It supports strong occupancy overall, but a buyer should still check how concentrated a building's tenant roster is in one or two large technology or financial services employers, since that concentration carries different risk than a diversified rent roll.",
      },
      {
        question: "Why do apartments near Ocotillo lease at a premium over other parts of Chandler?",
        answer: "Proximity to the semiconductor campus and the Price Road corridor shortens commutes for a large employment base, which supports faster lease-up and higher achievable rents. A buyer should still confirm what share of renters actually work in that corridor versus commuting from elsewhere.",
      },
      {
        question: "Should downtown Chandler retail be underwritten the same way as Chandler Fashion Center retail?",
        answer: "No. The destination center pulls from a much wider trade area and prices accordingly, while downtown redevelopment retail trades partly on momentum and future potential. A buyer should discount pro forma assumptions tied to a district's newest, least-proven tenants.",
      },
      {
        question: "How many replacement properties should I identify if I'm exiting a technology-adjacent office building?",
        answer: "Many exchangers use the 200% rule in this situation, naming retail, medical office, and DST candidates alongside an office replacement, so the exchange is not simply trading one concentrated employer exposure for another.",
      },
      {
        question: "Can 1031 Exchange of Phoenix confirm my Chandler property qualifies for exchange treatment?",
        answer: "No. This service coordinates identification timelines, lender scheduling, and communication with the investor's advisors. Whether a transaction and property qualify as like-kind is a determination made by the investor's own tax advisor and qualified intermediary.",
      },
    ],
  },
  gilbert: {
    sections: [
      {
        html: "<p>Gilbert is a residential town first, and its commercial real estate reflects that. There is no large office corridor or industrial cluster carrying the market. Almost everything that trades here, retail, medical office, self-storage, exists to serve the rooftops around it, which keeps the underwriting simpler but also means the same fixed pool of buyers competes for a small number of listings. None of this makes Gilbert a bad market for an exchange. It simply means a buyer should come in with realistic expectations about deal volume rather than comparing it directly to a larger, deeper submarket like Mesa or Chandler.</p>",
      },
      {
        heading: "SanTan Village Sets the Ceiling for Gilbert Retail",
        html: "<p>The mixed-use retail surrounding SanTan Village pulls shoppers from well beyond Gilbert's own borders and prices at the top of what this submarket supports, while neighborhood strip centers scattered through the rest of town depend entirely on the rooftops within a few miles. A buyer comparing the two needs separate trade-area assumptions, not one blended number, because a center's tenant mix and lease durability differ sharply between them.</p>",
      },
      {
        heading: "Medical and Dental Office Track the Town's Family Demographics",
        html: "<p>Gilbert skews toward younger families, and that shows up directly in steady demand for pediatric, dental, and urgent care space along the Val Vista, Higley, and Gilbert Road corridors. This is some of the more dependable income in the submarket, since tenants in this category tend to sign longer terms and build out expensive suites they are reluctant to abandon.</p><p>A buyer should still confirm parking ratios meet the standard a medical tenant expects, since some older buildings in this corridor were designed for retail parking counts and fall short of what a busy pediatric or dental practice actually needs on a Saturday morning.</p>",
      },
      {
        heading: "The Heritage District Is a Small But Growing Downtown Play",
        html: "<p>Downtown Gilbert's Heritage District has built a real restaurant and boutique retail scene out of what used to be a quiet agricultural town center, and small mixed-use buildings there now draw exchange interest from buyers who want a walkable, character-driven asset rather than a standard strip center. Inventory is thin, so a buyer serious about this district should expect to wait for the right listing rather than force a deal.</p><p>Older buildings in this district sometimes carry historic or design-review restrictions that limit exterior changes, so a buyer planning any renovation should check with the town's planning staff before finalizing a purchase price around a specific improvement plan.</p>",
      },
      {
        heading: "Self-Storage Fills a Real Gap Left by Limited Industrial Land",
        html: "<p>Because Gilbert has little land zoned for industrial use compared to Mesa or Chandler, self-storage has become the default way local investors capture demand from a growing, space-constrained residential base. Facilities near newer subdivisions on the town's eastern and southern edges tend to stabilize faster than older facilities closer to the built-out center.</p><p>Replacement candidates a buyer will typically encounter in this submarket include:</p><ul><li>Grocery-anchored and net lease retail near SanTan Village</li><li>Medical and dental office along Val Vista and Higley corridors</li><li>Mixed-use retail and restaurant buildings in the Heritage District</li><li>Self-storage facilities near newer residential growth on the town's edges</li><li>Small owner-user flex space in the limited industrial-zoned areas</li></ul>",
      },
      {
        heading: "A Thin Market Calls for a Broader Identification List",
        html: "<p>Because so few large commercial properties trade in Gilbert in any given year, I generally push sellers toward the 200% rule rather than the three-property rule, naming retail, medical office, and self-storage or DST candidates together. Betting an entire exchange on three specific Gilbert listings is a real risk when the market this small might not produce three good options at once.</p><p>Neighboring Chandler and Mesa should stay on the table as well. A Gilbert seller who limits the search to town limits alone is competing for a genuinely small pool of listings against every other local buyer doing the same thing.</p>",
      },
    ],
    faqs: [
      {
        question: "Why does retail near SanTan Village price higher than the rest of Gilbert?",
        answer: "It draws shoppers from well beyond Gilbert's own boundaries, unlike neighborhood strip centers that depend entirely on nearby rooftops. Comparing the two with one blended trade-area assumption will overstate or understate value depending on which side of the comparison you're on.",
      },
      {
        question: "Is medical and dental office a reliable replacement property type in Gilbert?",
        answer: "It has been one of the more dependable categories, since tenants in that space tend to sign longer terms and invest in expensive buildouts they are reluctant to walk away from. That said, every lease should still be reviewed individually rather than assumed to hold true across the category.",
      },
      {
        question: "How much inventory is available in the Heritage District for exchange buyers?",
        answer: "Very little at any given time. It is a small, character-driven downtown district, and a buyer specifically targeting it should expect to wait for the right listing rather than force a purchase to meet an identification deadline.",
      },
      {
        question: "Why does self-storage play a bigger role in Gilbert than in some neighboring cities?",
        answer: "Gilbert has comparatively little land zoned for industrial use, so self-storage has become the practical way to serve demand from a growing, space-constrained residential base, particularly near newer subdivisions on the town's edges.",
      },
      {
        question: "Can 1031 Exchange of Phoenix tell me if my Gilbert property qualifies for a like-kind exchange?",
        answer: "No. This service coordinates identification, scheduling, and communication among the investor's advisors. Whether a specific property and transaction qualify is a determination made by the investor's own tax advisor and qualified intermediary.",
      },
    ],
  },
  glendale: {
    sections: [
      {
        html: "<p>Glendale has two commercial identities that rarely overlap. There is the stadium and entertainment district surrounding State Farm Stadium and the arena next to it, and there is the ordinary West Valley suburb centered on Arrowhead Towne Center and the Loop 101 industrial corridor. A seller here needs to know which identity their property actually belongs to before setting expectations for price. A buyer touring either side of the city should ask the seller directly which identity the property belongs to, since marketing materials sometimes blur the line more than the actual lease terms support.</p>",
      },
      {
        heading: "Entertainment District Retail Depends on Event Calendars",
        html: "<p>Retail and restaurant space in the Westgate area around the stadium and arena leases against event traffic, concerts, football Sundays, concert tours, arena events, rather than a steady weekday customer base. A buyer should ask for revenue broken out by event days versus non-event days, since an average that blends the two tells you very little about how the property performs on an ordinary Tuesday.</p><p>A quiet fall without a deep playoff run or a light concert booking calendar can change annual revenue meaningfully, and a buyer should stress-test that scenario rather than assuming last year's event schedule repeats exactly.</p>",
      },
      {
        heading: "Luke Air Force Base Shapes What Can Be Built Nearby",
        html: "<p>Land in the western part of Glendale sits inside noise and safety contours tied to Luke Air Force Base, which restricts certain uses and density regardless of what the zoning map otherwise allows. A buyer identifying replacement property in this part of the city should confirm the parcel's position relative to those contours before assuming a standard commercial use is permitted. Any parcel search in this part of Glendale should start with a call to the airport authority rather than relying solely on the assessor's zoning designation.</p>",
      },
      {
        heading: "Arrowhead Retail Is the Steadier, More Ordinary Trade",
        html: "<p>Retail near Arrowhead Towne Center and the surrounding neighborhood centers behaves like conventional suburban retail, leasing against local rooftops rather than an event calendar, and it tends to be easier to underwrite than the stadium district. Cap rates here reflect that stability, usually pricing a notch below the flashier entertainment-district product per square foot despite the steadier income.</p><p>This is the part of Glendale I point most conservative exchange buyers toward, since the income is easier to defend to a lender and the tenant roster rarely swings on whether the home team made the playoffs.</p>",
      },
      {
        heading: "Industrial Along the Loop 101 Corridor Serves the Whole West Valley",
        html: "<p>Distribution and light industrial buildings along the Loop 101 and Northern Avenue corridor benefit from Glendale's position at the crossroads of the West Valley, feeding trucks toward Phoenix, Peoria, and the Loop 303 corridor without the congestion of driving through the urban core. This stock trades to a mix of regional distributors and local owner-users, and pricing tends to sit a step below what comparable buildings command farther out along the Loop 303. Candidates worth comparing in this submarket include:</p><ul><li>Event-driven retail and restaurant space near the stadium and arena</li><li>Grocery-anchored and neighborhood retail near Arrowhead Towne Center</li><li>Distribution and light industrial buildings along Loop 101 and Northern Avenue</li><li>Medical office serving the growing residential base north and west of the city</li><li>Small owner-user industrial space clear of the Luke Air Force Base contours</li></ul>",
      },
      {
        heading: "Structure the Identification List Around Which Glendale You Are In",
        html: "<p>A seller exiting entertainment-district retail should expect a narrower, more specialized buyer pool and may want to identify a broader mix of candidates using the 200% rule, since a like-for-like replacement in that niche does not come up often. A seller exiting Arrowhead-area retail or Loop 101 industrial typically has an easier three-property search, because that stock trades in a more conventional, predictable pattern. A buyer working through a Glendale identification list should also confirm which stadium and arena events are contractually locked in for the coming year, since a thin event calendar changes the entertainment-district math meaningfully.</p>",
      },
    ],
    faqs: [
      {
        question: "How should retail income near the stadium and entertainment district be analyzed differently?",
        answer: "Income should be broken out between event days and ordinary weekdays rather than averaged together, since an event calendar drives most of the meaningful traffic. A blended average can make the property look either much stronger or much weaker than its true operating pattern.",
      },
      {
        question: "How does Luke Air Force Base affect commercial property near western Glendale?",
        answer: "Noise and safety contours tied to the base can restrict certain uses and density even where the underlying zoning would otherwise allow them. A buyer should confirm a parcel's position relative to those contours before assuming a standard commercial use is available.",
      },
      {
        question: "Is retail near Arrowhead Towne Center a safer replacement than entertainment-district retail?",
        answer: "It generally behaves more predictably, since it leases against local rooftops rather than an event calendar, and it is easier to underwrite as a result. Pricing per square foot is often a notch below the flashier stadium-area product despite the steadier income.",
      },
      {
        question: "Should I widen my identification list when exiting entertainment-district property?",
        answer: "Often yes. That niche has a narrower buyer pool and fewer comparable replacements, so the 200% rule gives a seller room to name a broader mix of candidates rather than relying on three specific properties in a specialized market.",
      },
      {
        question: "Can 1031 Exchange of Phoenix confirm whether my Glendale property qualifies for exchange treatment?",
        answer: "No. This service coordinates identification, lender scheduling, and communication among the investor's advisors. Whether a specific transaction and property qualify as like-kind is determined by the investor's own tax advisor and qualified intermediary.",
      },
    ],
  },
  goodyear: {
    sections: [
      {
        html: "<p>Goodyear has become one of the biggest industrial stories in the entire Phoenix metro, and most of that growth traces back to the Loop 303 and I-10 interchange, where large distribution buildings keep getting built faster than the surrounding retail can catch up. A seller here is often sitting on land or a building that has appreciated because of that corridor, not because of anything specific to the property itself.</p>",
      },
      {
        heading: "The Loop 303 Corridor Is the Biggest Piece of This Market by Far",
        html: "<p>Large-format distribution buildings along the Loop 303 corridor in Goodyear serve regional and national logistics operators who need highway access on multiple sides, and this stock trades to a deep pool of institutional buyers rather than local investors. A seller exiting one of these buildings should expect a fast, well-capitalized buyer pool, but also expect that pool to run detailed diligence on roof condition, dock configuration, and power capacity before closing.</p><p>An exchange buyer competing for this stock should line up financing and a lender preflight letter well before the identification deadline, since institutional sellers here often favor a buyer who can prove they can close on the seller's timeline over one offering a marginally higher price.</p>",
      },
      {
        heading: "Spring Training Retail Runs on a Short, Predictable Calendar",
        html: "<p>Restaurant and retail space near the Cactus League ballpark sees a real, well-documented seasonal bump each spring, similar to the pattern in Peoria and Surprise, and it is one of the more predictable seasonal niches in the Valley because the training schedule barely changes year to year. A buyer should still ask for monthly revenue rather than an annual figure that hides the shape of that seasonal curve. A buyer relying on a single strong training season to underwrite a purchase should still confirm the surrounding retail depends on demand beyond that six-week window, since a ballpark alone rarely supports a full center on its own.</p>",
      },
      {
        heading: "Estrella Parkway Retail Is Chasing New Rooftops, Not Serving Them Yet",
        html: "<p>Retail development along Estrella Parkway and the newer residential areas south of the freeway is still catching up to the pace of home construction, which means some centers here are underbuilt relative to demand while others were built ahead of the rooftops and are still stabilizing. A buyer needs a current occupancy snapshot rather than a projection, since the gap between the two can be significant in a fast-growing corridor like this one. A buyer should ask how recently the center's anchor lease was renewed, since a fresh long-term commitment from a grocery or discount anchor says more about durability than the headline occupancy percentage alone.</p>",
      },
      {
        heading: "Aviation and Land Around the Airport Add a Different Kind of Opportunity",
        html: "<p>Land near Goodyear's municipal airport, an area with a long history tied to aviation manufacturing and testing, still supports flex and light industrial demand from aerospace-adjacent tenants, though it is a smaller and more specialized slice of the market than the Loop 303 distribution stock. Replacement candidates worth comparing across the city include:</p><ul><li>Large-format distribution buildings along the Loop 303 and I-10 corridor</li><li>Seasonal restaurant and retail space near the spring training ballpark</li><li>Grocery-anchored retail along Estrella Parkway serving newer subdivisions</li><li>Aviation-adjacent flex and light industrial space near the municipal airport</li><li>Medical office serving the growing residential base south of the freeway</li></ul>",
      },
      {
        heading: "Big Institutional Deals Change the Identification Math",
        html: "<p>A seller exiting a large Loop 303 distribution building is often replacing a big check, which sometimes points toward a DST placement or a fractional interest rather than a single like-for-like building, especially if a comparable asset isn't available in the identification window. The 200% rule earns its keep here for exactly that reason, giving a seller room to name a mix of direct property and passive DST candidates side by side. A qualified intermediary experienced with DST placements can move faster on this kind of split strategy than one only used to handling straightforward single-property exchanges, so it is worth confirming that experience up front.</p>",
      },
    ],
    faqs: [
      {
        question: "What diligence should a buyer expect on a Loop 303 distribution building in Goodyear?",
        answer: "Institutional buyers in this corridor scrutinize roof condition, dock configuration, and power capacity closely, so a seller should have that documentation ready. A buyer should expect a fast-moving, well-capitalized competing pool for well-positioned buildings.",
      },
      {
        question: "How predictable is the seasonal bump near the spring training ballpark?",
        answer: "It is one of the more predictable seasonal patterns in the Valley, since the training schedule changes little year to year, but a buyer should still request monthly revenue rather than an annual figure that can obscure the actual shape of that seasonal curve.",
      },
      {
        question: "Is Estrella Parkway retail fully stabilized at this point?",
        answer: "Not uniformly. Some centers are underbuilt relative to current rooftop demand while others were built ahead of the population and are still stabilizing, so a buyer needs a current occupancy snapshot rather than a projection based on the area's growth trajectory.",
      },
      {
        question: "Why might a seller consider a DST placement when exiting a large Goodyear distribution building?",
        answer: "A large sale can outpace what a single comparable replacement building can absorb within the identification window, so a DST or fractional interest sometimes fills the gap. The 200% rule allows a seller to list direct property and DST candidates together rather than choosing one path upfront.",
      },
      {
        question: "Can 1031 Exchange of Phoenix confirm whether my Goodyear property qualifies for a like-kind exchange?",
        answer: "No. This service coordinates identification, lender scheduling, and communication among the investor's advisors. Whether a specific transaction and property qualify as like-kind is a determination made by the investor's own tax advisor and qualified intermediary.",
      },
    ],
  },
  mesa: {
    sections: [
      {
        html: "<p>Mesa has quietly become one of the bigger industrial stories in the Valley, mostly because of what has been built along the Elliot Road corridor and around Falcon Field, and most exchange buyers still underrate it. Sellers here are usually cashing out of land or older commercial buildings that have appreciated well past what the rent roll alone would suggest.</p>",
      },
      {
        heading: "Elliot Road Has Turned Southeast Mesa Into a Real Tech Corridor",
        html: "<p>Large-scale data center and advanced manufacturing development along the Elliot Road technology corridor has pulled construction, trades, and support businesses into that part of the city, and land near the corridor has priced up accordingly. A seller holding raw or entitled land here often has more identification flexibility than a seller holding a finished building, because land trades on entitlement status rather than a lease rate, and that changes how a replacement search should be structured.</p><p>A buyer looking at this corridor should ask directly about utility capacity, water rights, and power infrastructure before assuming a parcel is shovel-ready, since some of the fastest-appreciating land here still needs real infrastructure work before a builder can break ground. Water availability in particular deserves a hard look, since the corridor draws heavily on the same municipal supply that residential growth nearby also depends on.</p>",
      },
      {
        heading: "Falcon Field Anchors an Aviation and Defense Manufacturing Cluster",
        html: "<p>Falcon Field and the aerospace manufacturing plants nearby support a steady base of flex and light industrial demand from suppliers and contractors who want to sit close to that work. This stock tends to lease to long-term owner-occupants rather than rotating tenants, which makes income more predictable but also means fewer buildings come to market in any given year.</p><p>A buyer who finds a listing here should move quickly and decisively, since a well-priced building in this cluster rarely stays on the market long enough for a slow due-diligence process to play out.</p>",
      },
      {
        heading: "Build-to-Rent Has Changed What Counts as Replacement Property",
        html: "<p>Mesa has absorbed a large share of the Valley's build-to-rent single-family growth, and some exchange buyers are now treating a stabilized build-to-rent community as a legitimate multifamily-style replacement rather than a novelty. A buyer considering this route should confirm how the property is titled and managed, since a scattered-lot rental portfolio can behave very differently at sale than a single platted community does.</p><p>Lenders are still catching up to this asset class in some cases, so a buyer should start those financing conversations early rather than assuming a build-to-rent purchase will underwrite exactly like a conventional apartment loan.</p>",
      },
      {
        heading: "Retail Follows the Rooftops, Which Keeps Growing East",
        html: "<p>Retail centers along the Superstition Springs corridor and out toward the far eastern edge of the city keep pace with new rooftops rather than leading them, so a buyer should weigh how much of a center's tenant demand is truly captured versus how much depends on continued residential growth nearby. Candidates worth comparing on a Mesa retail search include:</p><ul><li>Grocery-anchored centers near newer master-planned communities</li><li>Net lease pads along the Superstition Springs and US-60 corridors</li><li>Medical and urgent care space near the Banner health campuses</li><li>Self-storage serving the fast-growing eastern edge of the city</li><li>Small-bay flex space near Falcon Field and the aerospace cluster</li></ul>",
      },
      {
        heading: "Identification Strategy Shifts With What You Are Selling",
        html: "<p>A seller exiting a Falcon Field flex building can usually find a comparable replacement without much trouble, since that stock trades in a fairly narrow, well-understood band. A seller exiting raw land near Elliot Road often benefits from the 200% rule, naming a mix of entitled parcels, industrial buildings, and DST interests, since land pricing here can move faster than a three-property list can keep up with.</p><p>Coordinating a qualified intermediary and lender early matters more in Mesa than it might in a slower-moving submarket, since well-priced industrial and land deals here tend to get bid up quickly once they hit the market.</p>",
      },
    ],
    faqs: [
      {
        question: "Why does land near the Elliot Road corridor need a different identification approach?",
        answer: "Land pricing there is tied to entitlement status and proximity to the technology corridor rather than a lease rate, and it can move quickly. The 200% rule gives a seller room to name several parcels or a mix of land and DST candidates instead of betting on three specific sites.",
      },
      {
        question: "Is flex space near Falcon Field a reliable 1031 replacement?",
        answer: "It can be, since long-term owner-occupant tenants make the income predictable, but the tradeoff is that fewer buildings come to market in a given year, so a buyer should start the search early rather than waiting until close to the identification deadline.",
      },
      {
        question: "Can a build-to-rent community serve as replacement property for an exchange?",
        answer: "Many investors treat a stabilized build-to-rent community as multifamily-style replacement property, but the buyer should confirm how the community is titled and managed, since a scattered-lot rental portfolio can trade very differently than a single platted community.",
      },
      {
        question: "How does retail near Superstition Springs compare to retail closer to central Mesa?",
        answer: "Retail near Superstition Springs and the growing eastern edge of the city tends to track new rooftop growth rather than an established resident base, so a buyer should weigh how much tenant demand depends on continued residential construction nearby.",
      },
      {
        question: "Can 1031 Exchange of Phoenix confirm whether my Mesa property qualifies for a 1031 exchange?",
        answer: "No. This service coordinates identification, lender scheduling, and communication among the investor's advisors. Whether a specific transaction qualifies as like-kind is determined by the investor's own CPA, tax attorney, and qualified intermediary.",
      },
    ],
  },
  "paradise-valley": {
    sections: [
      {
        html: "<p>Paradise Valley barely has a commercial real estate market in the conventional sense. Zoning here keeps out big-box retail, most office towers, and anything resembling a strip center, so what does trade, resort property, small medical suites, land, trades at a premium and moves slowly. A seller should not expect the pace or the buyer pool of a normal Phoenix suburb. A buyer should not expect this town to behave like a typical Phoenix suburb in any respect, from the pace of transactions to the depth of the available buyer pool.</p>",
      },
      {
        heading: "Strict Zoning Is the Single Biggest Fact About This Market",
        html: "<p>Paradise Valley's zoning code has kept the town almost entirely residential and low-scale for decades, and that scarcity is exactly why the handful of commercial properties that do exist here command such a premium. A buyer should confirm current zoning and any use restrictions directly with the town before assuming a property's current use can be expanded or replaced with something similar.</p><p>A use that has operated for years under a legacy approval is not automatically transferable to a new owner planning any change, however small, so a buyer should walk through the town's planning department before finalizing a purchase contract, not after.</p>",
      },
      {
        heading: "Resort Property Along Lincoln Drive Carries the Market",
        html: "<p>The resort and hospitality properties along the Lincoln Drive corridor and at the base of Camelback Mountain represent most of the meaningful commercial value in the town, and they trade to a small, sophisticated buyer pool that already understands luxury resort operations. Income here depends heavily on brand reputation, group and event business, and seasonal occupancy, not a fixed lease the way a net lease investor might expect. A buyer new to this niche should also budget more time for closing than a conventional net lease deal would need, since resort transactions here often involve brand agreements and management contracts that add real negotiating steps.</p>",
      },
      {
        heading: "Boutique Medical and Dental Suites Fill the Rest of the Market",
        html: "<p>Small medical and dental office suites serving the town's affluent, older resident base are some of the only other commercial properties that change hands with any regularity, and they lease at rates that reflect the surrounding household income rather than typical medical office comparables elsewhere in the Valley. A buyer should expect a thin resale market if a tenant ever needs to be replaced.</p><p>These suites rarely sit vacant long once a tenant does leave, since a small, well-heeled patient base and limited competing space work in the landlord's favor, but a buyer should still budget realistically for the buildout costs a replacement medical tenant will expect before signing. A prospective buyer should also confirm parking availability at any medical suite, since the town's limited commercial parking supply can constrain a practice's patient volume regardless of how strong the surrounding demographics look.</p>",
      },
      {
        heading: "Land Here Trades on Scarcity, Not on a Rent Roll",
        html: "<p>A vacant or underbuilt parcel in Paradise Valley is frequently worth more for what a buyer could build on it, a luxury residence, a small boutique commercial project, than for any income it currently produces, so a straightforward income approach can badly understate value in this town. Replacement candidates a buyer will typically encounter here include:</p><ul><li>Resort and hospitality property along the Lincoln Drive corridor</li><li>Boutique medical and dental suites serving the local resident base</li><li>Small parcels of land valued primarily for future luxury development</li><li>Limited neighborhood retail permitted under the town's restrictive zoning</li></ul>",
      },
      {
        heading: "Identification Needs to Look Beyond Town Limits",
        html: "<p>Because so little commercial property exists inside Paradise Valley at any given time, most sellers exiting a property here have to identify replacement candidates outside the town, often in Scottsdale or the Camelback corridor of Phoenix, using the 200% rule to keep the search realistic rather than trying to force a like-for-like match inside a market this small. A qualified intermediary who has handled exchanges out of this town before is worth seeking out specifically, since the identification search almost always crosses a municipal boundary and needs a coordinator comfortable working across two different jurisdictions.</p>",
      },
    ],
    faqs: [
      {
        question: "Why does Paradise Valley have so little commercial property compared to nearby cities?",
        answer: "The town's zoning code has kept it almost entirely residential and low-scale for decades, which restricts big-box retail, most office development, and standard strip centers. That scarcity is a large part of why the properties that do exist command a premium.",
      },
      {
        question: "How should resort income along Lincoln Drive be evaluated for an exchange?",
        answer: "It should be underwritten on brand reputation, group and event business, and seasonal occupancy rather than treated like a fixed net lease. A buyer unfamiliar with luxury resort operations should bring in an experienced operator before relying on the seller's projections.",
      },
      {
        question: "Is land in Paradise Valley valued on its current rental income?",
        answer: "Often not primarily. A vacant or underbuilt parcel is frequently worth more for what could be developed on it, given the scarcity of buildable land in the town, than for whatever modest income it currently produces.",
      },
      {
        question: "Where do most Paradise Valley sellers find replacement property?",
        answer: "Because so little commercial property trades inside the town itself, most sellers end up identifying candidates in neighboring Scottsdale or the Camelback corridor of Phoenix, often using the 200% rule to keep the search realistic.",
      },
      {
        question: "Can 1031 Exchange of Phoenix confirm my Paradise Valley property qualifies for a like-kind exchange?",
        answer: "No. This service coordinates identification, scheduling, and communication among the investor's advisors. Whether a specific property and transaction qualify is a determination made by the investor's own tax advisor and qualified intermediary.",
      },
    ],
  },
  "queen-creek": {
    sections: [
      {
        html: "<p>Queen Creek is converting fast, and the pace shows up in the commercial stock. Land that grew alfalfa and cotton a generation ago now carries new power centers, multifamily, and medical buildings racing to catch up with the rooftops moving in along Ellsworth and Ocotillo Roads. An owner exchanging into Queen Creek is buying newer-vintage product almost by default, since so little here predates the last decade of growth.</p>",
      },
      {
        heading: "New Product Chasing New Rooftops",
        html: "<p>Grocery-anchored power centers have gone up along the Ellsworth Road and Ocotillo Road corridors to serve the wave of new subdivisions, and medical and urgent care operators have followed close behind, opening buildings before the surrounding rooftops are even fully built out. Multifamily construction has kept pace with single-family growth, and a meaningful share of what trades here is recent construction rather than older stock repositioned for a new use. Agricultural parcels still working the edges of town are held less for farming income and more for their entitlement value.</p><p>A few working farms, mostly growing melons and other row crops sold seasonally at roadside stands, still operate closer to the center of town, and those parcels carry a dual identity: working agricultural land today, future rooftops or retail once the surrounding growth eventually reaches them.</p>",
      },
      {
        heading: "What an Identification List Usually Includes",
        html: "<p>Replacement candidates tied to Queen Creek proceeds commonly include:</p><ul><li>Grocery-anchored power centers along Ellsworth and Ocotillo Roads</li><li>New-construction multifamily communities</li><li>Medical and urgent care buildings placed ahead of rooftop growth</li><li>Single-tenant pads at hard corners on major arterials</li><li>Remaining agricultural parcels held for eventual entitlement</li></ul>",
      },
      {
        heading: "Reading Annexation and Zoning Before Counting on Density",
        html: "<p>Parcels near Queen Creek's edges can sit inside town limits, unincorporated Maricopa or Pinal County, or a recent annexation, and the zoning that applies can change depending on which of those it is. A buyer should confirm current annexation status and zoning stack directly with the town rather than assume a parcel's location on a map settles the question, since land value here often depends heavily on what density the parcel can actually support once entitled. A property that looks identical to its neighbor on a satellite image can carry a very different allowable use if one sits just inside the town boundary and the other just outside it.</p>",
      },
      {
        heading: "Infrastructure Lagging Behind the Growth Curve",
        html: "<p>Road capacity and sewer service in parts of Queen Creek are still catching up to how fast rooftops have arrived, and a buyer should check planned capital improvement timing before assuming full build-out access exists on day one. Arizona's assured water supply requirements also matter more here than in older, already-serviced parts of the Valley, and a buyer on any parcel without confirmed water service should get that verified before closing rather than after.</p><p>Traffic signal timing and turn-lane capacity along Ellsworth and Ocotillo Roads also lag the pace of new rooftop delivery in some stretches, and a retail tenant weighing a new lease should ask about planned road improvements rather than assume today's access will hold once the surrounding subdivisions finish building out.</p>",
      },
      {
        heading: "Competing for Product in a Market Everyone Is Watching",
        html: "<p>Queen Creek's growth story has drawn enough outside capital that identified replacement properties can move fast once listed, sometimes faster than the identification window comfortably allows. An owner should have a broker actively tracking pipeline product before the relinquished sale closes, and should build a backup property or two into the identification list rather than relying on a single candidate surviving to closing. Pre-leasing activity on new construction can also move faster than in older submarkets, so a buyer evaluating a shell building should confirm actual signed leases rather than proforma projections before finalizing an offer.</p>",
      },
    ],
    faqs: [
      {
        question: "Is most Queen Creek commercial property new construction?",
        answer: "A large share of it is. So much of the town has developed in the last decade that new-vintage retail, medical, and multifamily buildings make up the bulk of what's available, with older stock much harder to find.",
      },
      {
        question: "Why does annexation status matter for land near Queen Creek's edges?",
        answer: "Parcels near the town's boundary can sit in the town, in unincorporated county land, or in a recent annexation, and each carries different zoning. Confirm the current status with the town directly rather than assuming based on a map.",
      },
      {
        question: "Does Queen Creek have enough water and sewer capacity to support new growth?",
        answer: "It's catching up, but capacity varies by area. Check assured water supply status and planned infrastructure timing on any specific parcel before assuming full service is already in place.",
      },
      {
        question: "Are there still working farms inside Queen Creek?",
        answer: "A handful, mostly growing row crops sold at seasonal roadside stands. Many of those parcels are held today for farming income but priced with an eye toward eventual redevelopment as the surrounding growth reaches them.",
      },
      {
        question: "Can 1031 Exchange of Phoenix determine if my Queen Creek transaction qualifies for like-kind treatment?",
        answer: "No. That call belongs to the investor's qualified intermediary, CPA, or tax attorney. This service coordinates sourcing, timelines, and communication among those advisors.",
      },
    ],
  },
  scottsdale: {
    sections: [
      {
        html: "<p>Scottsdale trades differently than the rest of the Phoenix metro. Land is tight, resort product carries a premium, and the buyer pool has no patience for a commodity deal. An investor bringing exchange proceeds into this submarket needs a plan built for a smaller, pricier pool of replacements, not the volume game that works out west in Surprise or Buckeye.</p>",
      },
      {
        heading: "Old Town Retail Runs on Tourist Traffic, Not Rooftop Counts",
        html: "<p>Old Town Scottsdale retail and restaurant space leases against foot traffic from the entertainment district, the art walk crowd, and resort guests staying nearby, not against a fixed radius of rooftops the way a suburban strip center does. Seasonality matters more here. A slow August can look nothing like a busy February, and a buyer should ask for at least twelve months of trailing revenue by month before trusting a seller's pro forma.</p><p>Net lease restaurant space along 5th Avenue and Main Street draws steady exchange interest because those tenants tend to sign longer terms than the bar and nightlife concepts around them, and longer terms make the income easier to underwrite.</p>",
      },
      {
        heading: "The Airpark Carries the Office and Flex Volume",
        html: "<p>Most of the office and flex deal flow in Scottsdale happens north of Old Town, around Scottsdale Airport and the Hayden Road corridor, in what locals call the Airpark. It behaves closer to a normal office market than the tourist core does. Replacement candidates a buyer will actually see on the market include:</p><ul><li>Multi-tenant office buildings along Hayden Road and Redfield Road</li><li>Flex and light industrial space serving avionics and aerospace tenants near the airport</li><li>Medical and dental office near the Shea corridor hospital campuses and Mayo Clinic Scottsdale</li><li>Corporate build-to-suit and creative office space in Kierland and DC Ranch</li><li>Small-bay industrial condos favored by owner-users exiting other parts of the Valley</li></ul>",
      },
      {
        heading: "Resort and Hospitality Income Needs a Different Underwriting Model",
        html: "<p>Resort and boutique hotel product along the Camelback corridor and near the golf resorts draws exchange buyers who already understand hospitality operations, because income depends on management quality, group and event business, and a seasonal occupancy swing that a passive net lease investor is not used to modeling. A buyer new to hospitality should bring in an operator or asset manager before closing, not after.</p><p>Land underneath aging resort product is sometimes worth more than the building's current income, so a full teardown-and-rebuild scenario belongs in the analysis even when the seller is only marketing the going-concern hotel.</p>",
      },
      {
        heading: "Small Parcels Push Buyers Toward Fewer, Pricier Candidates",
        html: "<p>Because land here runs multiples of what it costs in Mesa or Peoria, a Scottsdale exchange dollar buys less square footage, and the replacement search skews toward smaller, higher-quality assets instead of one large building. That is fine for a buyer trading down in size but up in quality. It is a problem for a buyer who needs to replace a large industrial building dollar-for-dollar and expects to find an equivalent parcel inside city limits.</p><p>I have seen this catch out sellers moving from a big warehouse elsewhere in the Valley into what they assumed would be a similarly sized Scottsdale asset. The math rarely works that way here, and a buyer needs to accept a smaller footprint, a different asset class, or a DST allocation to make the exchange proceeds land somewhere reasonable.</p>",
      },
      {
        heading: "Why the Identification List Needs to Stay Flexible",
        html: "<p>Given how thin the market is for any single asset type, I tell Scottsdale-bound buyers to keep their identification list mixed across office, retail, and DST candidates rather than betting everything on one building that might fall out of contract. The 200% rule earns its keep here more than in a deeper market, because it lets a buyer name several realistic backups instead of three long shots.</p><p>The forty-five day identification window moves fast in a market this thin. A buyer who waits until week three to start touring Airpark office or resort-adjacent land is usually the one scrambling to sign a lender preflight letter on a property they toured once, at night, from a parking lot.</p>",
      },
    ],
    faqs: [
      {
        question: "Why does seasonality matter so much for Old Town retail and restaurant replacement property?",
        answer: "Tourist and event traffic drives Old Town revenue more than a fixed residential base does, so monthly income can swing sharply between peak season and summer. A buyer should review at least a full year of trailing monthly revenue before relying on any annualized number a seller presents.",
      },
      {
        question: "Is the Scottsdale Airpark a realistic office replacement for an exchange coming from another metro?",
        answer: "Yes, for a buyer comfortable with a smaller multi-tenant building rather than a large single-tenant campus. Office and flex product near the airport trades more often than anything in Old Town or the resort corridor, which makes it easier to build a real identification list.",
      },
      {
        question: "How should hospitality income near the golf resorts be evaluated differently?",
        answer: "It should be underwritten on management quality, group and event bookings, and seasonal occupancy rather than a flat lease rate, since there is no long-term tenant carrying the income. Land value under an older resort building is also worth modeling separately from the going-concern operation.",
      },
      {
        question: "Should I widen my identification list given how few large parcels trade in Scottsdale?",
        answer: "Generally yes. The 200% rule lets a buyer name office, retail, and DST candidates together rather than staking the exchange on three specific buildings in a market where inventory turns over slowly.",
      },
      {
        question: "Can 1031 Exchange of Phoenix confirm that a specific Scottsdale property qualifies for my exchange?",
        answer: "No. This service coordinates identification, scheduling, and communication between the investor and their qualified intermediary, lender, and title company. Whether a given property and transaction qualify as like-kind is a determination made by the investor's own tax advisor and QI.",
      },
    ],
  },
  tempe: {
    sections: [
      {
        html: "<p>Tempe is a university town wrapped around a corporate office corridor, and the two markets barely touch. Student housing and Mill Avenue retail run on the academic calendar. The office towers around Tempe Town Lake run on corporate lease terms that have nothing to do with a fall semester. A buyer coming into this submarket needs to know which of those two markets they are actually stepping into.</p>",
      },
      {
        heading: "Student Housing Fills on the Academic Calendar, Not the Lease Calendar",
        html: "<p>Purpose-built student housing near Arizona State's main campus leases up hard in the spring for the following fall and can sit soft the rest of the year, which makes trailing twelve-month income a poor stand-in for forward income if a buyer is closing mid-cycle. Occupancy figures need a month-by-month breakdown, not an annual average, before anyone relies on them.</p><p>Older apartment stock a few blocks off campus that mixes students with young professionals tends to hold value better through a slow leasing season than a purpose-built student tower does, since it is not entirely dependent on one buyer pool. A seller marketing a purpose-built tower should also disclose any university enrollment changes that could affect next fall's pre-lease pace, since a buyer's lender will ask about it regardless.</p>",
      },
      {
        heading: "Town Lake Office Runs on Corporate Timelines",
        html: "<p>The office towers around Tempe Town Lake, home to large corporate campuses, trade on multi-year lease terms and credit-tenant underwriting that looks a lot like downtown Phoenix office, not like a suburban strip. A buyer replacing into this corridor should expect institutional-grade competition and pricing that reflects the waterfront location, and should budget for a longer diligence period than a smaller flex building would need. Parking structure capacity and ride-share pickup congestion around event nights at the lake are worth a site visit before assuming a building's amenity package is actually convenient for tenants.</p>",
      },
      {
        heading: "Mill Avenue and South Tempe Carry Very Different Retail Risk",
        html: "<p>Retail along Mill Avenue depends on foot traffic from students, ASU events, and downtown visitors, which makes weekday summer revenue a real underwriting question. Retail farther south, along Rural Road and near the ASU Research Park, serves a broader commuter and resident base and behaves more like ordinary suburban retail. Treating these two corridors the same in a pro forma is a common mistake I see buyers make.</p><p>Game-day and event-week traffic can inflate a single month's numbers on Mill Avenue dramatically, so a buyer should pull the full academic-year calendar and match it against reported revenue before trusting any single strong month as representative.</p>",
      },
      {
        heading: "Industrial and Flex Space Trades Quietly Along Priest and Southern",
        html: "<p>Smaller industrial and flex buildings near Priest Drive and Southern Avenue attract less attention than the office towers or student housing, but they trade steadily to owner-users and small investors who want proximity to Sky Harbor and the 202 corridor without paying Scottsdale-level land prices. This stock rarely shows up in broad market searches, so a buyer should ask a local broker directly rather than relying on listing portals alone.</p><p>Because so much of this stock changes hands through relationships rather than open marketing, a buyer with a hard identification deadline should start those broker conversations in week one, not week three, of the forty-five day window.</p>",
      },
      {
        heading: "Match the Identification Strategy to Which Tempe You Are Buying",
        html: "<p>A seller exiting student housing usually wants to identify a mix of multifamily, self-storage, and DST candidates, since dependable core multifamily can be harder to find at a matching price. A seller exiting Town Lake office typically has an easier time finding a like-for-like replacement, because credit-tenant office trades more consistently across the Valley than student housing does.</p><p>A seller exiting a Priest Drive flex building sits somewhere in between. Comparable buildings do trade, but not often, so a buyer working that identification list should widen the search to nearby Chandler and south Phoenix rather than restricting it to Tempe city limits alone.</p>",
      },
    ],
    faqs: [
      {
        question: "Why does student housing near ASU need a different income analysis than regular apartments?",
        answer: "Leasing activity concentrates heavily in the spring for the following fall term, so a trailing twelve-month average can mask a weak summer or a strong pre-lease season. A month-by-month breakdown gives a much more accurate picture before an exchange deadline forces a decision.",
      },
      {
        question: "Is office near Tempe Town Lake priced like the rest of the Phoenix office market?",
        answer: "No. Waterfront location and large corporate anchor tenants push pricing and buyer competition closer to downtown Phoenix levels than to a typical suburban office park, so a buyer should expect institutional-level diligence and a longer closing runway.",
      },
      {
        question: "Should Mill Avenue retail and South Tempe retail be underwritten the same way?",
        answer: "No. Mill Avenue depends on student and event foot traffic that thins out in the summer, while retail near the ASU Research Park and Rural Road serves a steadier commuter and resident base. Applying one pro forma template to both is a common and avoidable mistake.",
      },
      {
        question: "How many replacement properties should I identify when exiting student housing?",
        answer: "Many exchangers use the 200% rule here, naming multifamily, self-storage, and DST candidates together, since core apartment product that matches a student housing sale price is not always easy to find on the first pass.",
      },
      {
        question: "Can 1031 Exchange of Phoenix tell me whether my Tempe replacement property qualifies as like-kind?",
        answer: "No. This service coordinates the identification timeline, lender scheduling, and communication among the investor's advisors. Whether a specific property qualifies is determined by the investor's own tax advisor and qualified intermediary.",
      },
    ],
  },
};

export function getLocationRichContent(slug: string): LocationRichContent | undefined {
  return locationRichContent[slug];
}
