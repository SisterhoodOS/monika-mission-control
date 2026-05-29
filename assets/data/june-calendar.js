/* Sisterhood OS — June 2026 Content Calendar
 * Structure: 13-column full production brief
 * Approved by: Sophia Fox
 * Built: 2026-05-29
 */
window.JUNE_CALENDAR = {
  meta: {
    month: 'June 2026',
    subtitle: 'SPC Cohort 1 Launch + Community Deepening',
    launchDate: '2026-06-06',
    totalPosts: 32,
    keywords: { spc: 'READY', community: 'SISTER', educate: 'SEND IT', identity: 'THIS IS ME', entertain: 'SLAY', trust: 'MORE', convert: 'YES' },
    hardRules: [
      'No em dashes — use periods or commas',
      'No commanding tone — no "you need to" / "you should"',
      'No hype phrases — no "change your life" / "high-vibe"',
      'No scarcity manipulation',
      'Caption = 1 paragraph only, ends with unique CTA'
    ]
  },
  purposes: {
    'trust':          { label: 'Trust',          color: '#4A6741', bg: '#EAF0E4' },
    'awareness':      { label: 'Awareness',       color: '#C9876A', bg: '#FBE9DF' },
    'brand-identity': { label: 'Brand Identity',  color: '#3A2E5A', bg: '#EDE9FA' },
    'educate':        { label: 'Educate',          color: '#185FA5', bg: '#E6F1FB' },
    'entertain':      { label: 'Entertain',        color: '#B8467A', bg: '#FCE4EE' },
    'convert':        { label: 'Convert',          color: '#A33D1F', bg: '#FBE9DF' },
    'community':      { label: 'Community',        color: '#7A8C6A', bg: '#F0F4EC' }
  },
  posts: [

    // ─── WEEK 1: June 1–7 — Pre-Launch + SPC LAUNCH DAY ─────────────

    {
      id: 'jun-w1-01',
      schedule: { date: '2026-06-01', day: 'Monday', time: '08:00 WITA' },
      format: 'Reel',
      shootLocation: 'Home or Bali cafe — morning light, journal on table, warm earthy setting',
      topic: 'Opening the month with the feeling of quiet anticipation. Something is shifting. SPC is 5 days away but this reel does NOT mention it directly — it plants the emotional seed. The message: change does not arrive loudly. It arrives in quiet moments like this one.',
      quantity: 1,
      purpose: 'awareness',
      visualHook: 'Sitting at desk, journal open in front, pen set down slowly. Long pause. Then slow look up directly into camera.',
      verbalHook: 'Something is about to change. I can feel it.',
      script: `[0:00–0:03] VISUAL: Hands place pen down on open journal. Slow. Deliberate.
[0:03–0:06] VISUAL: Eyes lift slowly to camera. Hold.
[0:06–0:10] SPEAK: "Something is about to change. I can feel it."
[0:10–0:18] SPEAK: "Not because I have a plan. But because I've stopped waiting for permission to begin."
[0:18–0:25] VISUAL: Slight smile. Look down at journal, then back up.
[0:25–0:32] SPEAK: "If you feel it too, you're not imagining it. That's the signal."
[0:32–0:38] SPEAK: "Trust it."
[0:38–0:42] VISUAL: Soft close — look down, hand rests on journal. Fade or hold.`,
      music: 'Novo Amor — Anchor / OR soft ambient piano from IG trending audio',
      visualLook: 'Warm feminine. Morning light through window. No filters. Earthy tones — clay, sage, cream. Hair natural. Minimal jewelry.',
      caption: 'Some months arrive quietly and change everything. This is one of them. Comment "READY" if you feel the shift too.',
      hashtags: ['#sisterhoodos', '#femininesovereignty', '#womenempowerment', '#consciousliving', '#baliwomen', '#soulpathcollective'],
      cta: 'Comment "READY" if you feel the shift too',
      status: 'draft'
    },

    {
      id: 'jun-w1-02',
      schedule: { date: '2026-06-02', day: 'Tuesday', time: '18:00 WITA' },
      format: 'Carousel',
      shootLocation: 'Canva design — brand colors, Cormorant Garamond typography',
      topic: 'What is Soul Path Collective. Explain the program clearly, warmly, without sales pressure. 5 slides that answer: what is this, who is it for, what happens inside, what does it cost, and how to join. This is the orientation post before launch day.',
      quantity: 1,
      purpose: 'educate',
      visualHook: 'Slide 1: Elegant serif headline on Pearl background. No clutter.',
      verbalHook: 'Soul Path Collective is not a course. It is a return.',
      script: `SLIDE 1 — COVER:
Headline: "Soul Path Collective is not a course. It is a return."
Subtext: SISTERHOOD OS · Cohort 1 · June 2026
Background: Luminous Pearl. Rose Clay accent line at bottom.

SLIDE 2 — WHAT IT IS:
Heading: "What is it?"
Body: A 6-month immersion for women who are done building someone else's vision. We work with your cycle, your energy, and your actual life to build something that is fully yours.
Visual: Soft sage tone, single column text.

SLIDE 3 — WHO IT IS FOR:
Heading: "Who is this for?"
Body: The woman who feels the pull toward something more. Who has the ambition and the exhaustion in equal measure. Who knows she is meant for something but cannot yet name it.
Visual: Warm sand background.

SLIDE 4 — WHAT HAPPENS INSIDE:
Heading: "What you receive"
Body list:
• 6 months of cycle-synced business mentorship
• Weekly live sessions with Sophia
• A private sisterhood of 20 women
• The tools, the structure, the space
Visual: Rose Clay accent, elegant list format.

SLIDE 5 — HOW TO JOIN:
Heading: "Doors open June 6."
Body: If you feel the pull, that is enough. Comment "READY" below and I will send you everything you need to know.
Visual: Deep Cacao background. White text. Gold CTA highlight.`,
      music: 'N/A — carousel has no audio',
      visualLook: 'Editorial and warm. Sisterhood OS brand palette throughout. Cormorant Garamond serif headlines. Clean, spacious layouts.',
      caption: 'Soul Path Collective Cohort 1 opens on June 6. If you have been circling this idea for a while, this is your sign. Comment "READY" and I will send you the full details.',
      hashtags: ['#soulpathcollective', '#sisterhoodos', '#womensentrepreneurs', '#femalefounder', '#consciousbusiness', '#spc2026'],
      cta: 'Comment "READY" and I will send you the full details',
      status: 'draft'
    },

    {
      id: 'jun-w1-03',
      schedule: { date: '2026-06-03', day: 'Wednesday', time: '08:00 WITA' },
      format: 'Reel',
      shootLocation: 'Sophia\'s personal space — home, desk, or Bali outdoor setting. Raw and real.',
      topic: 'BTS of Sophia preparing for SPC launch. Not polished. The human behind the program. She talks about why she built this and what she hopes for the women who join. Trust-building through vulnerability and honesty.',
      quantity: 1,
      purpose: 'trust',
      visualHook: 'POV open — hands arranging papers or notes on desk. Then camera tilts up to Sophia\'s face.',
      verbalHook: 'I want to tell you why I built this.',
      script: `[0:00–0:04] VISUAL POV: Hands shuffling through handwritten notes on a warm wooden desk. Papers, a cup of tea, natural light.
[0:04–0:07] VISUAL: Camera tilts up slowly to Sophia's face.
[0:07–0:12] SPEAK: "I want to tell you why I built this."
[0:12–0:22] SPEAK: "Not the polished version. The real one. I built Soul Path Collective because I spent years watching women who were brilliant, capable, ready — waiting. Waiting for the right moment. For permission. For someone to tell them they were enough."
[0:22–0:30] SPEAK: "I was one of those women. And I know what it costs."
[0:30–0:38] SPEAK: "This program is what I wished existed when I needed it most."
[0:38–0:44] SPEAK: "If you are in that place right now, I see you. And there is a space here for you."
[0:44–0:48] VISUAL: Sophia looks down briefly, then back to camera. Quiet, grounded close.`,
      music: 'Gracie Abrams — I know it won\'t work / OR Phoebe Bridgers — Savior Complex (instrumental)',
      visualLook: 'Raw, authentic, no filters. Warm natural light. Not glamorous — real. This is the most human post of the month.',
      caption: 'I built this because I know what it feels like to be ready and still not move. If that is you, I made something for you. Comment "MORE" and I will share it with you.',
      hashtags: ['#sisterhoodos', '#soulpathcollective', '#femalefounders', '#womenleaders', '#authenticleadership', '#baliwomen'],
      cta: 'Comment "MORE" and I will share it with you',
      status: 'draft'
    },

    {
      id: 'jun-w1-04',
      schedule: { date: '2026-06-04', day: 'Thursday', time: '18:00 WITA' },
      format: 'Reel',
      shootLocation: 'Outdoor — garden, rice field, or anywhere with nature in the background. Spacious and grounding.',
      topic: 'Community is not a luxury. It is a requirement. This reel is for the woman who has been trying to figure everything out alone — and is exhausted from it. Sisterhood as a survival strategy, not just a nice idea.',
      quantity: 1,
      purpose: 'community',
      visualHook: 'Walking slowly into frame from behind. Stops. Turns to camera.',
      verbalHook: 'You were never supposed to do this alone.',
      script: `[0:00–0:04] VISUAL: Back of Sophia walking slowly into frame. Green, open space. She stops and turns around to face the camera.
[0:04–0:08] SPEAK: "You were never supposed to do this alone."
[0:08–0:18] SPEAK: "The idea that the strongest version of you is the most self-sufficient one. That needing people is a weakness. That asking for help means you are not ready."
[0:18–0:24] SPEAK: "That is not strength. That is just loneliness with a productivity schedule."
[0:24–0:32] SPEAK: "The women I have seen change their lives the fastest are not the ones with the best strategy. They are the ones who found their people first."
[0:32–0:38] SPEAK: "There is a room of those women being built right now. If you have been looking for it, it exists."
[0:38–0:44] VISUAL: Sophia looks out at the landscape briefly, then back. Soft smile.
[0:44–0:48] SPEAK: "Comment SISTER. Let's talk."`,
      music: 'Cleo Sol — Golden / OR Corinne Bailey Rae — Put Your Records On (soft version)',
      visualLook: 'Bali lifestyle. Open, warm, green. Sophia in earthy tones — clay, cream, sage. Wind in hair. Feels spacious and free.',
      caption: 'The version of you that is exhausted from doing it all alone deserves a place to put that down. That place exists. Comment "SISTER" and I will tell you about it.',
      hashtags: ['#sisterhood', '#womenscircle', '#sisterhoodos', '#communityforwomen', '#womenempowerment', '#findyourtribe'],
      cta: 'Comment "SISTER" and I will tell you about it',
      status: 'draft'
    },

    {
      id: 'jun-w1-05',
      schedule: { date: '2026-06-05', day: 'Friday', time: '08:00 WITA' },
      format: 'Carousel',
      shootLocation: 'Canva design — Self Development pillar colors, reflective tone',
      topic: 'Signs you are ready for your next chapter. Not signs you are perfect or prepared. Signs you are ready. This carousel creates deep recognition in the woman who has been circling the decision to invest in herself.',
      quantity: 1,
      purpose: 'brand-identity',
      visualHook: 'Slide 1: Bold single line on a warm background. No decoration.',
      verbalHook: 'Signs you are ready for your next chapter (even if you don\'t feel ready yet).',
      script: `SLIDE 1 — COVER:
"Signs you are ready for your next chapter.
Even if you don't feel ready yet."
Background: Warm Sand. Deep Cacao serif text. SISTERHOOD OS label.

SLIDE 2:
"You have outgrown the story you have been telling yourself.
The old excuses don't land the same way anymore."

SLIDE 3:
"You are more tired from staying than you are afraid of leaving.
The comfort of familiar has quietly become the weight of it."

SLIDE 4:
"You stop dismissing the pull.
You notice it instead. You sit with it. You let it be information."

SLIDE 5:
"You are reading this.
And something in you recognized it as true before you finished the sentence."

SLIDE 6 — CTA:
"Which one landed?
Tell me in the comments. I read every one."
Background: Rose Clay. Pearl text. Soft.`,
      music: 'N/A — carousel',
      visualLook: 'Introspective, clean, grounded. Warm Sand and Rose Clay palette. Generous white space. Cormorant Garamond italic for emotional lines.',
      caption: 'Readiness does not feel like certainty. It feels like something shifting that you can no longer pretend isn\'t there. Which slide was yours? Comment "THIS IS ME" and let\'s talk.',
      hashtags: ['#selfdevelopment', '#womensgrowth', '#sisterhoodos', '#personalevolution', '#femininepower', '#nextchapter'],
      cta: 'Comment "THIS IS ME" and let\'s talk',
      status: 'draft'
    },

    {
      id: 'jun-w1-06',
      schedule: { date: '2026-06-06', day: 'Saturday', time: '08:00 WITA' },
      format: 'Reel',
      shootLocation: 'Sophia\'s most beautiful setting — sunrise, outdoor Bali, or meaningful personal space. This is THE launch post.',
      topic: 'SPC LAUNCH DAY — Morning post. Doors are open. This reel is not a sales pitch. It is an invitation. Warm, direct, sovereign. Sophia speaks from the heart about what this community means and who it is for. This is the post everything has been building toward.',
      quantity: 1,
      purpose: 'convert',
      visualHook: 'Sunlight through curtains or outdoor sunrise shot. Then cut to Sophia, close up, direct eye contact. Calm and certain.',
      verbalHook: 'Today, the doors open.',
      script: `[0:00–0:04] VISUAL: Soft sunrise light — through curtains or outdoor. Warm. Golden. Hold 3 seconds.
[0:04–0:07] CUT TO: Sophia close-up. Direct eye contact. Calm.
[0:07–0:10] SPEAK: "Today, the doors open."
[0:10–0:18] SPEAK: "Soul Path Collective — a 6-month space for 20 women who are done waiting and ready to build something that is fully, unapologetically theirs."
[0:18–0:26] SPEAK: "I have been building toward this for a long time. And if you have been following along, I think you know this is not just another program."
[0:26–0:34] SPEAK: "It is a room. With real women. Doing the real work. Together."
[0:34–0:42] SPEAK: "If you have felt the pull, if something in you has been saying yes for months. Now is the time to listen to that."
[0:42–0:48] SPEAK: "Comment READY below. I will send you everything."
[0:48–0:52] VISUAL: Sophia holds camera gaze. Slow blink. Genuine smile. Fade.`,
      music: 'Ludovico Einaudi — Experience / OR Hans Zimmer ambient. Something cinematic and emotional.',
      visualLook: 'The most beautiful visual of the month. Golden hour or sunrise. Sophia looks radiant, grounded, certain. Rose Clay and Gold tones. Feminine and powerful.',
      caption: 'Soul Path Collective is open. 20 women. 6 months. A room built for this exact season of your life. Comment "READY" and I will send you everything you need to take the next step.',
      hashtags: ['#soulpathcollective', '#spc2026', '#sisterhoodos', '#womensentrepreneurs', '#consciousbusiness', '#femininesovereignty', '#nowopen'],
      cta: 'Comment "READY" and I will send you everything you need to take the next step',
      status: 'draft'
    },

    {
      id: 'jun-w1-07',
      schedule: { date: '2026-06-06', day: 'Saturday', time: '18:00 WITA' },
      format: 'Reel',
      shootLocation: 'Evening setting — warm lamp light, intimate, cozy. Different energy from the morning post.',
      topic: 'SPC LAUNCH DAY — Evening post. For the women who saw the morning post and have been sitting with it all day. This is the gentle nudge. Not pressure — recognition. "If you are still thinking about it, there is a reason."',
      quantity: 1,
      purpose: 'convert',
      visualHook: 'Close-up on hands wrapped around a warm cup. Then slow tilt up to face in soft lamp light.',
      verbalHook: 'If you have been thinking about it all day. That means something.',
      script: `[0:00–0:04] VISUAL: Close up on hands holding warm cup. Soft lamp light. Intimate.
[0:04–0:07] VISUAL: Slow tilt up to Sophia's face. Warm, direct, not intense.
[0:07–0:13] SPEAK: "If you have been thinking about it all day. That means something."
[0:13–0:22] SPEAK: "Not the anxious kind of thinking. The kind where part of you already knows the answer and the rest of you is just catching up."
[0:22–0:30] SPEAK: "I am not here to convince you. You do not need convincing. You need permission to trust what you already know."
[0:30–0:38] SPEAK: "Soul Path Collective is open tonight. 20 women. If there is space for you, it is yours."
[0:38–0:44] SPEAK: "Comment READY. I will take care of the rest."
[0:44–0:48] VISUAL: Sophia takes a slow sip of her cup. Calm. Warm. Hold.`,
      music: 'Cigarettes After Sex — Dreaming / OR soft lo-fi ambient. Evening mood.',
      visualLook: 'Warm, intimate, evening. Low lamp light. No harsh lighting. Sophia in soft tones. Feels like a quiet, private conversation.',
      caption: 'The thinking you have been doing all day is not anxiety. It is clarity arriving in its own time. Soul Path Collective is still open tonight. Comment "READY" and I will send you the details.',
      hashtags: ['#soulpathcollective', '#spc2026', '#sisterhoodos', '#womenleaders', '#femininepower', '#trustyourself'],
      cta: 'Comment "READY" and I will send you the details',
      status: 'draft'
    },

    {
      id: 'jun-w1-08',
      schedule: { date: '2026-06-07', day: 'Sunday', time: '12:00 WITA' },
      format: 'Reel',
      shootLocation: 'Bright, open space — midday light. Celebratory but soft. Community feel.',
      topic: 'Welcome to the women who said yes. A post for the new SPC cohort — and for the women watching who haven\'t joined yet. This creates social proof and belonging simultaneously. Not "look at us" but "look what is possible when women gather."',
      quantity: 1,
      purpose: 'community',
      visualHook: 'Sophia walks into frame, arms open slightly, then closes them as if welcoming someone into a hug. Looks directly at camera.',
      verbalHook: 'To the women who said yes yesterday. Welcome home.',
      script: `[0:00–0:04] VISUAL: Sophia walks slowly into frame with arms slightly open. Warm, welcoming.
[0:04–0:08] SPEAK: "To the women who said yes yesterday. Welcome home."
[0:08–0:18] SPEAK: "I do not take lightly what it costs to say yes to yourself. The internal negotiation. The doubt. The moment you decide your vision matters more than your fear."
[0:18–0:26] SPEAK: "You did that. And now you are inside a room of women who did the same thing."
[0:26–0:34] SPEAK: "To the women still watching — there is no pressure. But when you are ready. The door will be open."
[0:34–0:40] SPEAK: "This is what it looks like when women choose themselves."
[0:40–0:46] VISUAL: Sophia places hand on heart. Looks down. Then looks up with a real smile.
[0:46–0:50] SPEAK: "Comment SISTER if this is the kind of room you are looking for."`,
      music: 'Solange — Cranes in the Sky / OR Lauryn Hill — Everything is Everything (soft)',
      visualLook: 'Open, bright, warm Sunday light. Celebratory but grounded. No confetti, no performance. Real joy.',
      caption: 'Twenty women walked through the door yesterday. And something inside that room shifted from concept to real. If you are still watching, know that when it is your time, there will be a space. Comment "SISTER" and I will keep you close.',
      hashtags: ['#sisterhoodos', '#soulpathcollective', '#womenscommunity', '#sisterhood', '#womenempowerment', '#community'],
      cta: 'Comment "SISTER" and I will keep you close',
      status: 'draft'
    },

    // ─── WEEK 2: June 8–14 — Post-Launch Nurture ─────────────────────

    {
      id: 'jun-w2-09',
      schedule: { date: '2026-06-08', day: 'Monday', time: '08:00 WITA' },
      format: 'Reel',
      shootLocation: 'Personal, intimate space. Could be same as the BTS reel — continuity feels authentic.',
      topic: 'Sophia shares the moment she knew she needed to stop performing strength. A personal story of the cost of doing it all alone before she found her own version of sisterhood. This is the deepest trust-building post of the month.',
      quantity: 1,
      purpose: 'trust',
      visualHook: 'Looking out a window, profile shot. Then slowly turns to face camera.',
      verbalHook: 'There was a year I convinced everyone I was fine. Including myself.',
      script: `[0:00–0:05] VISUAL: Sophia profile, looking out window. Still. Thoughtful.
[0:05–0:08] VISUAL: Turns slowly to face camera.
[0:08–0:14] SPEAK: "There was a year I convinced everyone I was fine. Including myself."
[0:14–0:24] SPEAK: "I was building, producing, showing up. From the outside everything was working. From the inside I was running on something that was not sustainable and I knew it."
[0:24–0:32] SPEAK: "The thing that changed it was not a strategy. It was a room. Three women who asked real questions and waited for real answers."
[0:32–0:40] SPEAK: "I stopped performing being okay. And everything that was not real started to fall away."
[0:40–0:48] SPEAK: "That room was the beginning of everything I have built since. Including this one."
[0:48–0:54] VISUAL: Sophia looks directly at camera. Quiet. No wrap-up performance.
[0:54–0:58] SPEAK: "If you are in that year right now. You are not alone. Comment MORE."`,
      music: 'Bon Iver — Skinny Love / OR Fleet Foxes — White Winter Hymnal (slow version)',
      visualLook: 'Most vulnerable visual of the month. Soft, real, no performance. Slightly lower contrast. Feels like a private moment shared.',
      caption: 'The most important room I ever walked into was the one where I stopped pretending I had it all together. That room changed everything. Comment "MORE" if you are looking for that room.',
      hashtags: ['#sisterhoodos', '#vulnerabilityisstrength', '#womenshealing', '#authenticliving', '#communityheals', '#sistersupport'],
      cta: 'Comment "MORE" if you are looking for that room',
      status: 'draft'
    },

    {
      id: 'jun-w2-10',
      schedule: { date: '2026-06-09', day: 'Tuesday', time: '18:00 WITA' },
      format: 'Carousel',
      shootLocation: 'Canva — Educate pillar, clean and clear layout',
      topic: 'The 4 phases of your cycle and how they show up in your work. Practical and grounded. No woo, no pressure. Just real information about how feminine energy moves through the month and how to work with it instead of against it.',
      quantity: 1,
      purpose: 'educate',
      visualHook: 'Slide 1: Clean circular diagram or bold headline. Immediately useful-looking.',
      verbalHook: 'Your energy is not inconsistent. It is cyclical. Here is how to work with it.',
      script: `SLIDE 1 — COVER:
"Your energy is not inconsistent. It is cyclical."
Subtext: A practical guide to the 4 phases.
Background: Lush Green tone. Pearl text.

SLIDE 2 — MENSTRUAL (Inner Winter):
Heading: "Phase 1 — Rest"
Body: Days 1–5. Low energy is not failure. It is biology asking you to restore. Protect your calendar. Say no to outbound work. Reflect, review, release.
Best for: journaling, rest, internal review.

SLIDE 3 — FOLLICULAR (Inner Spring):
Heading: "Phase 2 — Begin"
Body: Days 6–13. Energy rises. Clarity returns. This is your best time for new ideas, starting projects, booking calls, and creative work.
Best for: new projects, networking, ideation.

SLIDE 4 — OVULATION (Inner Summer):
Heading: "Phase 3 — Connect"
Body: Days 14–16. Peak communication and charisma. Show up, pitch, lead, host. This is your most magnetic window of the month.
Best for: launches, podcasts, live events, difficult conversations.

SLIDE 5 — LUTEAL (Inner Autumn):
Heading: "Phase 4 — Refine"
Body: Days 17–28. Detail-oriented, reflective, quality-focused. Great for editing, completing projects, and honest evaluation. Protect yourself from overcommitting.
Best for: finishing, editing, systems work, boundaries.

SLIDE 6 — CTA:
"Which phase are you in right now?
Comment SEND IT and I will DM you the full cycle guide."`,
      music: 'N/A — carousel',
      visualLook: 'Clean, educational, beautiful. Lush Green and Warm Sand palette. Simple icons or circle diagrams. Feels like a page from a beautiful wellness journal.',
      caption: 'Your energy was never the problem. The problem was trying to maintain a linear schedule with a cyclical body. Comment "SEND IT" and I will DM you the full cycle guide.',
      hashtags: ['#cyclesyncing', '#feminineenergy', '#hormonalhealth', '#womenswellness', '#cyclicalliving', '#sisterhoodos'],
      cta: 'Comment "SEND IT" and I will DM you the full cycle guide',
      status: 'draft'
    },

    {
      id: 'jun-w2-11',
      schedule: { date: '2026-06-10', day: 'Wednesday', time: '08:00 WITA' },
      format: 'Reel',
      shootLocation: 'Wherever feels natural and fun — could be with another woman, could be solo with a playful prop',
      topic: 'Relatable sisters moment — the unspoken sister communication. Warm, playful, human. Pillar: Sisters Connection. This is the lightest post of the month. Pure connection and joy.',
      quantity: 1,
      purpose: 'entertain',
      visualHook: 'Quick cut to Sophia mid-laugh or caught in a genuinely candid moment.',
      verbalHook: 'When your sister sends you a meme at 2am and it was exactly what you needed to hear.',
      script: `[0:00–0:03] VISUAL: Quick cut — Sophia mid-laugh, candid, real. OR a relatable "caught in the middle of something" moment.
[0:03–0:08] SPEAK: "When your sister sends you a meme at 2am and it was exactly what you needed to hear."
[0:08–0:15] SPEAK: "No words. Just that thing where someone knows you well enough to reach through a phone and actually touch the thing."
[0:15–0:22] SPEAK: "That is sisterhood. That is the whole thing."
[0:22–0:28] VISUAL: Sophia looks at camera warmly, shakes head with a smile.
[0:28–0:34] SPEAK: "Tag the one who does this for you. She deserves to know."
[0:34–0:38] VISUAL: Point at camera or wave. End on joy.`,
      music: 'Harry Styles — Music for a Sushi Restaurant / OR any warm trending audio from IG',
      visualLook: 'Light, warm, playful. No performance. Bali natural light. Sophia in something comfortable. The most casual visual of the month — and intentionally so.',
      caption: 'The sister who reaches you without trying is the one worth keeping close. Tag her. Comment "SLAY" if you have one of these.',
      hashtags: ['#sisterhood', '#sistergoals', '#womensfriendship', '#sisterhoodos', '#sisterlove', '#girlgang'],
      cta: 'Comment "SLAY" if you have one of these',
      status: 'draft'
    },

    {
      id: 'jun-w2-12',
      schedule: { date: '2026-06-11', day: 'Thursday', time: '18:00 WITA' },
      format: 'Reel',
      shootLocation: 'Outdoors — open sky, standing, confident. Strong body language.',
      topic: 'Maturing as a woman means something specific. This reel lists 4 specific signs of feminine maturity — not productivity or achievement, but the quiet inner shifts that mark real growth. Identity / Feminine Power pillar.',
      quantity: 1,
      purpose: 'awareness',
      visualHook: 'Slow turn to camera, outdoors, standing tall. One breath before speaking.',
      verbalHook: 'Maturing is realizing your energy is a resource. And you get to decide who receives it.',
      script: `[0:00–0:04] VISUAL: Sophia standing outdoors, turned slightly away. Slow turn to face camera. Pause.
[0:04–0:10] SPEAK: "Maturing is realizing your energy is a resource. And you get to decide who receives it."
[0:10–0:18] SPEAK: "It is choosing conversations that build you instead of drain you."
[0:18–0:26] SPEAK: "It is the moment you stop explaining yourself to people who have already decided."
[0:26–0:34] SPEAK: "It is knowing the difference between a season of growth and a situation that is just hurting you slowly."
[0:34–0:42] SPEAK: "And it is finding the room where you do not have to shrink to belong."
[0:42–0:48] VISUAL: Sophia holds gaze. Still. Certain.
[0:48–0:52] SPEAK: "Comment THIS IS ME if any of that landed."`,
      music: 'SZA — Good Days / OR FKA Twigs — Two Weeks (soft version)',
      visualLook: 'Powerful and feminine. Outdoor Bali — open sky, warm light. Sophia standing, grounded. Earthy tones. Nothing fussy. Confidence through simplicity.',
      caption: 'Maturity does not always look like achievement. Sometimes it looks like the quiet, firm moment you decided your energy was worth protecting. Comment "THIS IS ME" if you know this feeling.',
      hashtags: ['#femininesovereignty', '#womensgrowth', '#energyprotection', '#sisterhoodos', '#femininepower', '#selfdevelopment'],
      cta: 'Comment "THIS IS ME" if you know this feeling',
      status: 'draft'
    },

    {
      id: 'jun-w2-13',
      schedule: { date: '2026-06-12', day: 'Friday', time: '08:00 WITA' },
      format: 'Carousel',
      shootLocation: 'Canva — Community pillar, warm and connected aesthetic',
      topic: 'What sisterhood actually looks like. Not the Instagram version. The real version. 5 slides that describe the unglamorous, deeply human reality of real sisterhood — to build recognition and trust in the community.',
      quantity: 1,
      purpose: 'community',
      visualHook: 'Slide 1: A single line that feels immediately true.',
      verbalHook: 'What sisterhood actually looks like.',
      script: `SLIDE 1 — COVER:
"What sisterhood actually looks like."
(Not the Instagram version.)
Background: Lush Green. Pearl text.

SLIDE 2:
"It is the friend who texts back at 11pm when you are in a spiral.
Not because she has the answer.
Because she refuses to let you spiral alone."

SLIDE 3:
"It is the one who tells you the truth.
Even when the kind thing would be silence.
Especially when the kind thing would be silence."

SLIDE 4:
"It is celebration without competition.
Her win does not take from yours.
It proves it is possible."

SLIDE 5:
"It is showing up imperfectly.
Crying in the call. Admitting you don't know.
And being received anyway."

SLIDE 6 — CTA:
"This is what we are building.
Comment SISTER if this is the room you have been looking for."`,
      music: 'N/A — carousel',
      visualLook: 'Warm, intimate, green tones. Feels like a letter between friends. Handwritten-style accents if possible in Canva. Nothing corporate.',
      caption: 'Real sisterhood is not glamorous. It is consistent, unglamorous, and one of the most powerful forces in a woman\'s life. Comment "SISTER" if you are looking for this kind of room.',
      hashtags: ['#sisterhood', '#sisterhoodos', '#womenscircle', '#realcommunity', '#womenempowerment', '#sistersupport'],
      cta: 'Comment "SISTER" if you are looking for this kind of room',
      status: 'draft'
    },

    {
      id: 'jun-w2-14',
      schedule: { date: '2026-06-13', day: 'Saturday', time: '08:00 WITA' },
      format: 'Reel',
      shootLocation: 'Bali outdoor — somewhere beautiful and grounding. This is a presence-and-power reel.',
      topic: 'A single truth about feminine sovereignty. Short, poetic, powerful. This is the kind of reel that women screenshot and save to their phone. Identity / Feminine Power pillar.',
      quantity: 1,
      purpose: 'awareness',
      visualHook: 'Crash zoom — opens on wide Bali outdoor shot, instantly zooms to Sophia\'s face. Hold.',
      verbalHook: 'Being a woman and choosing yourself is still a radical act.',
      script: `[0:00–0:03] VISUAL: Wide outdoor Bali shot — rice fields, lush green, open sky. CRASH ZOOM into Sophia's face. Hold.
[0:03–0:08] SPEAK: "Being a woman and choosing yourself is still a radical act."
[0:08–0:16] SPEAK: "Not choosing the relationship over your needs. Not choosing the job over your body. Not choosing everyone else over your actual life."
[0:16–0:24] SPEAK: "The radical part is not the big dramatic choice. It is the small daily one. The morning where you chose rest over productivity. The meeting you said no to."
[0:24–0:32] SPEAK: "Every time you honor what is true for you, you are practicing something that took women before us generations to earn the right to practice."
[0:32–0:38] SPEAK: "Do not take it lightly."
[0:38–0:44] VISUAL: Hold on Sophia's face. Still. Then slow nod. Fade.`,
      music: 'Lana Del Rey — Hope (instrumental) / OR ambient cinematic with feminine quality',
      visualLook: 'Cinematic. Wide to intimate zoom creates editorial energy. Bali backdrop — lush and grounding. Sophia in earthy tones. Still and powerful.',
      caption: 'Choosing yourself is not selfish. It is the most honest thing you can do. For yourself and for everyone around you. Comment "THIS IS ME" if this landed.',
      hashtags: ['#femininesovereignty', '#sovereignty', '#womenrise', '#sisterhoodos', '#chooseyourself', '#femalepower'],
      cta: 'Comment "THIS IS ME" if this landed',
      status: 'draft'
    },

    {
      id: 'jun-w2-15',
      schedule: { date: '2026-06-14', day: 'Sunday', time: '08:00 WITA' },
      format: 'Carousel',
      shootLocation: 'Canva — Brand Identity pillar, full SISTER Code aesthetic',
      topic: 'Who is Sisterhood OS. What we stand for. What we are building. This is the brand identity post — every month should have one. New followers need to understand who they have found.',
      quantity: 1,
      purpose: 'brand-identity',
      visualHook: 'Slide 1: The name. The mission. Nothing else.',
      verbalHook: 'Sisterhood OS. This is who we are.',
      script: `SLIDE 1 — COVER:
"Sisterhood OS."
"A space for women who are ready to stop shrinking."
Brand mark. Luminous Pearl background.

SLIDE 2 — THE VALUES:
"We are built on six beliefs:
Security. Integrity. Sovereignty.
Trust. Emotional Maturity. Reverence."
"The SISTER Code."

SLIDE 3 — WHAT WE DO:
"We build community for women who are in the middle of becoming.
Not the polished version. The real one."

SLIDE 4 — WHO WE ARE FOR:
"The woman who feels the gap between who she is and who she knows she could be.
Who is done waiting for someone to give her permission.
Who wants a room of women who understand."

SLIDE 5 — THE INVITATION:
"This is not a space to perform.
It is a space to arrive.
Exactly as you are."

SLIDE 6 — CTA:
"Comment SISTER if you have been looking for this.
Welcome."`,
      music: 'N/A — carousel',
      visualLook: 'Elegant brand identity. Full Sisterhood OS palette. Every slide brand-consistent. Clean, premium, feminine. This is the brand at its most polished.',
      caption: 'Sisterhood OS was built for the woman who knows she is in the middle of something important and is looking for the room where that is understood. Comment "SISTER" and welcome.',
      hashtags: ['#sisterhoodos', '#sisterhoodosbali', '#womenscommunity', '#femininepower', '#womenempowerment', '#communityforwomen'],
      cta: 'Comment "SISTER" and welcome',
      status: 'draft'
    },

    {
      id: 'jun-w2-16',
      schedule: { date: '2026-06-14', day: 'Sunday', time: '18:00 WITA' },
      format: 'Reel',
      shootLocation: 'Same BTS or personal space — continuation of the week\'s trust arc',
      topic: 'First week of SPC reflection. What Sophia noticed in the first week of Cohort 1. Honest, warm, human. Social proof through genuine observation rather than testimonials.',
      quantity: 1,
      purpose: 'trust',
      visualHook: 'Looking down at phone or notes, reading something. Looks up.',
      verbalHook: 'One week in. And I already see it.',
      script: `[0:00–0:04] VISUAL: Sophia looking at phone or notebook. Reading. Then looks up to camera.
[0:04–0:08] SPEAK: "One week in. And I already see it."
[0:08–0:18] SPEAK: "Women showing up as themselves. Not the version of themselves they think they should be. The actual version. The one that does not always have it together."
[0:18–0:26] SPEAK: "And the room receiving that. Without trying to fix it."
[0:26–0:34] SPEAK: "That is the thing I wanted to build. Not a program where women feel pressure to perform growth. A space where they can actually have it."
[0:34–0:42] SPEAK: "If you are watching and wondering whether this could be for you. This is what it looks like from the inside."
[0:42–0:48] SPEAK: "Comment MORE if you want to know more."`,
      music: 'Gracie Abrams — Stay / OR soft ambient with emotional warmth',
      visualLook: 'Warm, reflective, Sunday evening energy. Soft light. Intimate and real. No performance.',
      caption: 'A week in and the thing I wanted to build is already happening. Real women, arriving as themselves, being received. Comment "MORE" if you want to know what is happening inside.',
      hashtags: ['#soulpathcollective', '#spc2026', '#sisterhoodos', '#womenscommunity', '#realsisterhood', '#communityheals'],
      cta: 'Comment "MORE" if you want to know what is happening inside',
      status: 'draft'
    },

    // ─── WEEK 3: June 15–21 — Sisterhood Depth ───────────────────────

    {
      id: 'jun-w3-17',
      schedule: { date: '2026-06-15', day: 'Monday', time: '08:00 WITA' },
      format: 'Carousel',
      shootLocation: 'Canva — Educate pillar, healing and connection focus',
      topic: 'Why healing happens faster in community. The science and the soul of it. This carousel combines real research (nervous system co-regulation) with the Sisterhood OS philosophy. Builds credibility and emotional resonance.',
      quantity: 1,
      purpose: 'educate',
      visualHook: 'Slide 1: A single sentence that stops someone mid-scroll.',
      verbalHook: 'You are not healing slower than you should. You are healing alone.',
      script: `SLIDE 1 — COVER:
"You are not healing slower than you should.
You are healing alone."
Background: Warm Sand. Deep Cacao text.

SLIDE 2:
"Your nervous system is designed to regulate in relationship with others.
This is not metaphor. It is biology."

SLIDE 3:
"When you are witnessed without judgment, your cortisol drops.
When you feel safe in a room, your nervous system settles.
When your nervous system settles, healing can happen."

SLIDE 4:
"The pressure to heal on your own timeline, in isolation, through willpower alone — it is working against how you were built."

SLIDE 5:
"Community is not a comfort strategy.
For many women, it is the actual mechanism of change."

SLIDE 6 — CTA:
"Save this for the moments you feel like you should be further along.
Comment SEND IT and I will DM you more on this."`,
      music: 'N/A — carousel',
      visualLook: 'Clean, grounded, trustworthy. Warm Sand tones. Almost medical in its clarity but wrapped in warmth. Feels credible and caring at the same time.',
      caption: 'Healing alone is not a virtue. It is just harder. The nervous system was designed for co-regulation, for witnessing, for community. Comment "SEND IT" and I will share more on this.',
      hashtags: ['#nervousystemhealing', '#communityheals', '#sisterhoodos', '#traumahealing', '#cosystulation', '#womenswellness'],
      cta: 'Comment "SEND IT" and I will share more on this',
      status: 'draft'
    },

    {
      id: 'jun-w3-18',
      schedule: { date: '2026-06-16', day: 'Tuesday', time: '18:00 WITA' },
      format: 'Reel',
      shootLocation: 'Outdoors — strong, open setting. Standing tall.',
      topic: 'Sovereign women do not ask for permission. A power reel about the specific experience of being a woman who has stopped shrinking. Short, direct, undeniable.',
      quantity: 1,
      purpose: 'brand-identity',
      visualHook: 'Slow walk into frame. Stops. Turns. One beat of silence before speaking.',
      verbalHook: 'Sovereign women do not ask permission to take up space.',
      script: `[0:00–0:05] VISUAL: Sophia walks into frame from right. Stops center. Turns to camera. Holds. One breath.
[0:05–0:10] SPEAK: "Sovereign women do not ask permission to take up space."
[0:10–0:18] SPEAK: "They stopped waiting for the room to get quieter before they spoke. They stopped making themselves smaller so someone else could feel comfortable."
[0:18–0:26] SPEAK: "They learned that the cost of shrinking is higher than the cost of being visible."
[0:26–0:34] SPEAK: "And they found the rooms where they did not have to choose."
[0:34–0:40] SPEAK: "This is one of those rooms."
[0:40–0:46] VISUAL: Sophia stands still. Holds camera gaze. Does not move.
[0:46–0:50] SPEAK: "Comment THIS IS ME if you know what I mean."`,
      music: 'Beyonce — Spirit (soft intro) / OR powerful ambient cinematic',
      visualLook: 'Strong, feminine, grounded. Open outdoor Bali. Sophia standing fully — not leaning, not shrinking. Earthy power tones. Sunlit.',
      caption: 'Sovereignty is not something you earn. It is something you remember. Comment "THIS IS ME" if you are in the process of remembering.',
      hashtags: ['#sovereignty', '#femininesovereignty', '#womenrise', '#sisterhoodos', '#takeyourspace', '#femininepower'],
      cta: 'Comment "THIS IS ME" if you are in the process of remembering',
      status: 'draft'
    },

    {
      id: 'jun-w3-19',
      schedule: { date: '2026-06-17', day: 'Wednesday', time: '08:00 WITA' },
      format: 'Reel',
      shootLocation: 'With another woman if possible — or at a Sisterhood OS event or gathering',
      topic: 'Tag a sister. This is the highest-reach potential reel of the month. Simple, warm, shareable. Designed to be tagged and shared widely.',
      quantity: 1,
      purpose: 'community',
      visualHook: 'Point directly at camera at the top — "this is for you and your sister."',
      verbalHook: 'There is someone in your life who needs to hear this today.',
      script: `[0:00–0:04] VISUAL: Sophia points at camera. Warm, direct.
[0:04–0:08] SPEAK: "There is someone in your life who needs to hear this today."
[0:08–0:16] SPEAK: "The one who is working too hard and resting too little. Who is giving beautifully to everyone except herself. Who says she is fine but you can hear the exhaustion underneath it."
[0:16–0:24] SPEAK: "She does not need advice right now. She needs someone to say: I see you. You are not falling behind. You are carrying a lot."
[0:24–0:30] SPEAK: "Tag her. Let this be the thing you send today instead of the check-in you mean to send but don't."
[0:30–0:36] SPEAK: "She needs to know."
[0:36–0:42] VISUAL: Sophia places hand on heart. Warm close.`,
      music: 'Corinne Bailey Rae — Like a Star / OR any warm, soft trending audio',
      visualLook: 'Warm, connected, bright. Midday Bali light. Feels like a direct message to someone you love.',
      caption: 'Tag the woman who is carrying too much right now. She needs to know she is seen. Comment "SISTER" if you have someone in mind.',
      hashtags: ['#sistersupport', '#sisterhood', '#sisterhoodos', '#womenforwomen', '#tagsister', '#womenempowerment'],
      cta: 'Comment "SISTER" if you have someone in mind',
      status: 'draft'
    },

    {
      id: 'jun-w3-20',
      schedule: { date: '2026-06-18', day: 'Thursday', time: '18:00 WITA' },
      format: 'Carousel',
      shootLocation: 'Canva — Self Development pillar, reflective and honest',
      topic: 'Signs you are outgrowing your old self. Not a celebration post — an honest one. For the woman in the uncomfortable middle of becoming someone new.',
      quantity: 1,
      purpose: 'awareness',
      visualHook: 'Slide 1: A line that lands like recognition.',
      verbalHook: 'Outgrowing yourself is supposed to be uncomfortable. That is how you know it is real.',
      script: `SLIDE 1 — COVER:
"Outgrowing yourself is supposed to feel uncomfortable.
That is how you know it is real."
Background: Deep Cacao. Luminous Pearl text. Quiet authority.

SLIDE 2:
"The people you used to feel at home with now feel like a size too small.
Not because they changed. Because you did."

SLIDE 3:
"You have opinions you used to keep quiet.
And it is getting harder to stay quiet about them."

SLIDE 4:
"You are less interested in being liked
and more interested in being honest."

SLIDE 5:
"The version of you from two years ago
would not recognize some of the choices you are making now.
She would also be relieved to know they were coming."

SLIDE 6 — CTA:
"Where are you in this process?
Comment THIS IS ME and let's talk about it."`,
      music: 'N/A — carousel',
      visualLook: 'Deep, introspective. Darker palette — Deep Cacao and Pearl for gravitas. Feels honest rather than aspirational. Serif typography throughout.',
      caption: 'The discomfort of outgrowing yourself is not a sign that something is wrong. It is the sign that it is working. Comment "THIS IS ME" if you are in this season right now.',
      hashtags: ['#personalgrowth', '#outgrowingyourself', '#sisterhoodos', '#selfdevelopment', '#evolving', '#womensgrowth'],
      cta: 'Comment "THIS IS ME" if you are in this season right now',
      status: 'draft'
    },

    {
      id: 'jun-w3-21',
      schedule: { date: '2026-06-19', day: 'Friday', time: '08:00 WITA' },
      format: 'Reel',
      shootLocation: 'Home, relaxed setting. Comfortable, off-duty energy.',
      topic: 'The sisters connection reel for week 3. Warm, relatable, playful. About the specific kind of friendship where you can say nothing and still be understood.',
      quantity: 1,
      purpose: 'entertain',
      visualHook: 'Sophia on couch or in a relaxed setting, looks up from phone with a knowing look.',
      verbalHook: 'The friendship where silence is not awkward. It is actually the best part.',
      script: `[0:00–0:04] VISUAL: Sophia relaxed — couch, tea, phone in hand. Looks up with a knowing look.
[0:04–0:09] SPEAK: "The friendship where silence is not awkward. It is actually the best part."
[0:09–0:17] SPEAK: "When you can sit in the same room doing nothing and call it quality time. When the conversation can pause for four days and pick back up without explanation."
[0:17–0:24] SPEAK: "When you can send a voice note that is just ambient noise and she knows exactly what you mean."
[0:24–0:30] SPEAK: "I think we underestimate how rare that is."
[0:30–0:36] SPEAK: "Tag her. The one who gets it."
[0:36–0:40] VISUAL: Sophia smiles to herself. Sends a text. Warm close.`,
      music: 'Any warm trending audio / OR Rex Orange County — Best Friend',
      visualLook: 'Cozy, relaxed, off-duty. No performance. Sophia completely comfortable. Soft home lighting. Feels like a Saturday morning.',
      caption: 'The friendship where you can share an hour of silence and still call it a great conversation. If you have that, it is everything. Tag her. Comment "SLAY" if she will absolutely know it\'s her.',
      hashtags: ['#sistersconnection', '#bestfriends', '#sisterhoodos', '#realfriendship', '#womensfriendship', '#tagasister'],
      cta: 'Comment "SLAY" if she will absolutely know it\'s her',
      status: 'draft'
    },

    {
      id: 'jun-w3-22',
      schedule: { date: '2026-06-20', day: 'Saturday', time: '08:00 WITA' },
      format: 'Reel',
      shootLocation: 'Outside — raw, honest, no glamour. This is Sophia at her most unfiltered.',
      topic: 'The cost of performing strength. A raw, honest reel about what it takes from a woman when she is always the one who has it together. Self healing pillar.',
      quantity: 1,
      purpose: 'trust',
      visualHook: 'Phone-to-ear format — "put your phone to your ear for this one."',
      verbalHook: 'Put your phone to your ear for this one. I want to say this like I am talking to you.',
      script: `[0:00–0:05] VISUAL: Sophia holding phone up, gesturing to ear. Close to camera. Intimate.
[0:05–0:09] SPEAK: "Put your phone to your ear for this one. I want to say this like I am talking to you."
[0:09–0:18] SPEAK: "There is a cost to being the woman who always has it together. And no one talks about it."
[0:18–0:26] SPEAK: "It is the tiredness of being consistent for everyone else while quietly unraveling at 10pm when no one is watching."
[0:26–0:34] SPEAK: "It is the loneliness of strength. The way people stop checking in because they assume you are fine. Because you always seem fine."
[0:34–0:42] SPEAK: "You are allowed to put that down. You are allowed to need the room where you do not have to be fine."
[0:42–0:48] SPEAK: "If no one has said that to you today. I am saying it now."
[0:48–0:52] VISUAL: Sophia lowers phone slightly. Gentle. Direct. Hold.`,
      music: 'Phoebe Bridgers — Moon Song / OR emotional ambient that feels like privacy',
      visualLook: 'Most raw of the month. Lo-fi quality acceptable. No filters. Natural. The intimacy is the point.',
      caption: 'The loneliness of always being strong is one of the quietest kinds of exhaustion. You are allowed to put it down. Comment "MORE" if you have been carrying this.',
      hashtags: ['#selfhealing', '#performingstrength', '#sisterhoodos', '#womensmentalhealth', '#allowyourself', '#vulnerabilityheals'],
      cta: 'Comment "MORE" if you have been carrying this',
      status: 'draft'
    },

    {
      id: 'jun-w3-23',
      schedule: { date: '2026-06-21', day: 'Sunday', time: '08:00 WITA' },
      format: 'Reel',
      shootLocation: 'Outdoors — somewhere that feels like new beginnings. Sunrise or bright morning.',
      topic: 'Summer Solstice energy — the longest day, a turning point. A poetic reel about cycles, seasons, and the permission to begin again. Light, open, expansive.',
      quantity: 1,
      purpose: 'awareness',
      visualHook: 'Color walk — open on Sophia\'s feet walking slowly through light, warmth, gold. Then pan up to face.',
      verbalHook: 'Today is the longest day of the year. Use it.',
      script: `[0:00–0:05] VISUAL: Color walk — feet in warm light, golden tones. Slow pan up Sophia's body to face. Open sky behind her.
[0:05–0:09] SPEAK: "Today is the longest day of the year. Use it."
[0:09–0:17] SPEAK: "Not to be productive. Not to optimize. But to feel how much space there is."
[0:17–0:25] SPEAK: "The solstice is a turning point. In nature, everything that has been expanding now begins to gather inward."
[0:25–0:33] SPEAK: "What are you gathering? What have you built in this first half of the year that you want to carry into the second?"
[0:33–0:40] SPEAK: "Take a moment today. A real one. And ask yourself what she needs. The version of you in December."
[0:40–0:46] SPEAK: "She is being shaped right now."
[0:46–0:50] VISUAL: Sophia stands in light. Looks up. Arms slightly open. Breathes.`,
      music: 'Fleet Foxes — White Winter Hymnal / OR ambient with natural sounds — birdsong, wind',
      visualLook: 'Gold. Light. Expansive. Bali outdoor at its most beautiful. Sun through leaves or open sky. Sophia in white or cream. Feels like a sacred moment.',
      caption: 'The solstice is a checkpoint, not a deadline. What has this first half of 2026 been building in you? Comment "THIS IS ME" and share one word.',
      hashtags: ['#summersolstice', '#cyclicalliving', '#sisterhoodos', '#newbeginnings', '#naturalrhythms', '#femininewisdom'],
      cta: 'Comment "THIS IS ME" and share one word',
      status: 'draft'
    },

    {
      id: 'jun-w3-24',
      schedule: { date: '2026-06-21', day: 'Sunday', time: '18:00 WITA' },
      format: 'Carousel',
      shootLocation: 'Canva — Brand Identity, most beautiful design of the month',
      topic: 'The SISTER Code. Introduce the 6 values of Sisterhood OS as a piece of content that new followers will save, share, and return to. Brand identity at its purest.',
      quantity: 1,
      purpose: 'brand-identity',
      visualHook: 'Slide 1: SISTER — one letter per slide teased in the cover.',
      verbalHook: 'The SISTER Code. Six values. One sisterhood.',
      script: `SLIDE 1 — COVER:
"The SISTER Code.
Six values. One sisterhood."
Brand mark. Luminous Pearl.

SLIDE 2 — S: SECURITY:
"S — Security.
A space where you can arrive exactly as you are.
Without performing. Without proving. Without pretending."

SLIDE 3 — I: INTEGRITY:
"I — Integrity.
We speak from truth rather than assumption.
We repair quickly. We say what we mean with love."

SLIDE 4 — S: SOVEREIGNTY:
"S — Sovereignty.
We do not save, fix, or rescue each other.
Every sister walks her own path. In her own time."

SLIDE 5 — T: TRUST:
"T — Trust.
Built through presence, not promises.
Conflict does not break this sisterhood. Avoidance does."

SLIDE 6 — E & R:
"E — Emotional Maturity.
R — Reverence.
Your win is my win.
Your expansion is my expansion."

SLIDE 7 — CTA:
"This is who we are.
Comment SISTER if you want to be part of this."`,
      music: 'N/A — carousel',
      visualLook: 'The most beautiful design of the month. Full brand — every slide a different brand color but cohesive. Gold accents. Serif. Premium. Save-worthy.',
      caption: 'Six values. One sisterhood. The SISTER Code is the foundation of everything we build together at Sisterhood OS. Comment "SISTER" if this is the room you have been looking for.',
      hashtags: ['#sisterhoodos', '#sistercode', '#womenscommunity', '#brandvalues', '#femininepower', '#sisterhoodmovement'],
      cta: 'Comment "SISTER" if this is the room you have been looking for',
      status: 'draft'
    },

    // ─── WEEK 4: June 22–30 — Momentum + July Bridge ─────────────────

    {
      id: 'jun-w4-25',
      schedule: { date: '2026-06-22', day: 'Monday', time: '08:00 WITA' },
      format: 'Reel',
      shootLocation: 'Home — morning setup, intentional. Start of final week of June.',
      topic: 'The version of you that is coming. A forward-looking identity reel that plants the seed of what is possible. Not a sales post — an invitation to imagination.',
      quantity: 1,
      purpose: 'awareness',
      visualHook: 'POV open — first-person view of hands making morning tea or coffee, then look up into mirror or camera.',
      verbalHook: 'The woman you are becoming is already making decisions.',
      script: `[0:00–0:05] VISUAL POV: Hands making morning tea. Slow, intentional. Kettle, cup, steam.
[0:05–0:08] VISUAL: Look up into camera or mirror.
[0:08–0:14] SPEAK: "The woman you are becoming is already making decisions."
[0:14–0:22] SPEAK: "Every time you choose rest over proving. Every time you let yourself be seen. Every time you say yes to something that scares you slightly."
[0:22–0:30] SPEAK: "She is not waiting for the right conditions. She is being built right now. In the choices you are making this week."
[0:30–0:38] SPEAK: "What decision is she asking you to make today? The one you keep pushing to next week."
[0:38–0:44] VISUAL: Sophia holds cup. Looks directly at camera. Still. Calm.
[0:44–0:48] SPEAK: "Comment READY if you know what it is."`,
      music: 'Novo Amor — From Gold / OR soft ambient morning energy',
      visualLook: 'Warm, intentional morning. POV start makes it intimate. Earthy tones. Feels like a private ritual being shared.',
      caption: 'She is not waiting for the right moment. She is being built in the moments you are already in. Comment "READY" if you know what decision she is asking you to make.',
      hashtags: ['#femininepower', '#sisterhoodos', '#womensgrowth', '#becomingher', '#selfdevelopment', '#morningritual'],
      cta: 'Comment "READY" if you know what decision she is asking you to make',
      status: 'draft'
    },

    {
      id: 'jun-w4-26',
      schedule: { date: '2026-06-23', day: 'Tuesday', time: '18:00 WITA' },
      format: 'Carousel',
      shootLocation: 'Canva — Self Healing, gentle and restorative',
      topic: 'How to actually rest. Not productivity hacks. Not optimization. The real version of rest that most high-functioning women have forgotten how to do.',
      quantity: 1,
      purpose: 'educate',
      visualHook: 'Slide 1: A permission slip in carousel form.',
      verbalHook: 'Real rest is not on your to-do list. That is the whole point.',
      script: `SLIDE 1 — COVER:
"Real rest is not on your to-do list.
That is the whole point."
Background: Warm Sand. Sage accents.

SLIDE 2:
"Rest is not the reward at the end of productive.
For your nervous system, rest is the condition for everything else."

SLIDE 3 — What rest is NOT:
"Rest is not:
Scrolling with the guilt of things undone.
Sleeping until you can face the list again.
Calling a vacation 'self-care' while checking email."

SLIDE 4 — What rest IS:
"Rest is:
A morning with no agenda.
Saying no to something good because you need quiet.
Being bored. Actually bored. Without filling it."

SLIDE 5:
"The capacity you have for output is directly related to the quality of your input.
Rest is not laziness. It is infrastructure."

SLIDE 6 — CTA:
"What does real rest look like for you?
Comment SEND IT and share one thing below."`,
      music: 'N/A — carousel',
      visualLook: 'Soft, restorative. Warm Sand and Sage. Feels like a permission slip. Nothing demanding about the design. Gentle typography.',
      caption: 'You are not failing at rest. You have been taught to feel guilty for it. Rest is not a reward you earn. It is the condition your body needs to do everything else. Comment "SEND IT" and I will share more.',
      hashtags: ['#restisproductive', '#selfhealing', '#sisterhoodos', '#nervoussystemhealing', '#restingwoman', '#womenswellness'],
      cta: 'Comment "SEND IT" and I will share more',
      status: 'draft'
    },

    {
      id: 'jun-w4-27',
      schedule: { date: '2026-06-24', day: 'Wednesday', time: '08:00 WITA' },
      format: 'Reel',
      shootLocation: 'Community setting — if a circle or gathering is happening, capture it. Otherwise Sophia speaks from community perspective.',
      topic: 'What happens when women gather with intention. A poetic, visual reel about the specific alchemy of women\'s circles. Community pillar.',
      quantity: 1,
      purpose: 'community',
      visualHook: 'Slow pan across empty chairs arranged in a circle, or women's hands in a group setting. Then Sophia face.',
      verbalHook: 'There is something that happens when women gather with intention. Something that does not have a clinical name yet.',
      script: `[0:00–0:05] VISUAL: Slow pan — chairs in a circle, cushions, flowers. Or hands together in a group. Sacred, intentional space.
[0:05–0:08] CUT TO: Sophia face. Close. Thoughtful.
[0:08–0:16] SPEAK: "There is something that happens when women gather with intention. Something that does not have a clinical name yet."
[0:16–0:24] SPEAK: "Where one woman's honesty gives another woman permission to be honest. Where one woman's courage makes the room a little safer for everyone."
[0:24–0:32] SPEAK: "I have sat in many rooms. And the ones with women, in real honest circle, are the ones that changed me."
[0:32–0:40] SPEAK: "Not because of the agenda. Because of what happens when the agenda gets dropped."
[0:40–0:46] SPEAK: "If you have never sat in a room like that, you deserve to know it exists."
[0:46–0:50] SPEAK: "Comment SISTER if you are looking for it."`,
      music: 'Solange — Weary / OR sacred ambient, something with reverence',
      visualLook: 'Sacred, intentional, feminine. Warm but holy. If in a circle setting, capture the space itself. Candles, flowers, cushions. Bali aesthetic at its most intentional.',
      caption: 'The rooms that changed me were not the ones with the best strategy. They were the ones where someone was honest first. Comment "SISTER" if you are looking for that room.',
      hashtags: ['#womenscircle', '#sisterhood', '#sisterhoodos', '#sacredfeminine', '#communityforwomen', '#womensgathering'],
      cta: 'Comment "SISTER" if you are looking for that room',
      status: 'draft'
    },

    {
      id: 'jun-w4-28',
      schedule: { date: '2026-06-25', day: 'Thursday', time: '18:00 WITA' },
      format: 'Reel',
      shootLocation: 'Confident outdoor setting — this is a power reel.',
      topic: 'Being a woman who supports herself changes everything. The specific liberation of financial independence for women. Not a money post — a freedom post. Identity / Feminine Power.',
      quantity: 1,
      purpose: 'awareness',
      visualHook: 'Crash zoom from wide outdoor to close face shot. One pause before speaking.',
      verbalHook: 'When you can support yourself, the whole equation changes.',
      script: `[0:00–0:04] VISUAL: Wide Bali outdoor shot — lush, open. CRASH ZOOM to Sophia's face. Hold one beat.
[0:04–0:09] SPEAK: "When you can support yourself, the whole equation changes."
[0:09–0:17] SPEAK: "Not because money is the point. Because the choices you make from a position of financial stability are fundamentally different from the choices you make from need."
[0:17–0:25] SPEAK: "You stop staying in things past their season because you are afraid of what leaving would cost you."
[0:25–0:33] SPEAK: "You stop shrinking in relationships, in rooms, in conversations — because your sense of safety does not depend on someone else's approval."
[0:33–0:40] SPEAK: "Being a woman who can care for herself is not about independence from others. It is about choosing to be with others. Freely."
[0:40–0:46] VISUAL: Sophia holds the gaze. Still and certain.
[0:46–0:50] SPEAK: "Comment THIS IS ME if this is the version of you you are building."`,
      music: 'Beyonce — My Power / OR powerful ambient with feminine energy',
      visualLook: 'Strong, outdoor, powerful. Wide to intimate zoom creates cinematic authority. Sophia grounded and certain. Rose Clay and Gold tones.',
      caption: 'Financial independence for a woman is not about having more. It is about choosing freely. Comment "THIS IS ME" if you are building this version of yourself.',
      hashtags: ['#financialindependence', '#womenandmoney', '#sisterhoodos', '#femininesovereignty', '#womenwhowork', '#financialfreedom'],
      cta: 'Comment "THIS IS ME" if you are building this version of yourself',
      status: 'draft'
    },

    {
      id: 'jun-w4-29',
      schedule: { date: '2026-06-26', day: 'Friday', time: '08:00 WITA' },
      format: 'Carousel',
      shootLocation: 'Canva — Convert pillar, warm invitation not hard sell',
      topic: 'Five things that happen when a woman finds her community. This is the convert carousel — it shows the transformation without selling. Women see themselves in the outcomes and reach out.',
      quantity: 1,
      purpose: 'convert',
      visualHook: 'Slide 1: A transformation statement that creates recognition.',
      verbalHook: 'Five things that shift when a woman finally finds her room.',
      script: `SLIDE 1 — COVER:
"Five things that shift when a woman
finally finds her room."
Background: Rose Clay. Pearl text. Warm authority.

SLIDE 2:
"1. She stops performing strength.
Because the room does not need it from her."

SLIDE 3:
"2. She starts making decisions faster.
Because she is no longer making them alone."

SLIDE 4:
"3. Her standards shift quietly upward.
Because she has seen what is possible for women like her."

SLIDE 5:
"4. The loneliness lifts.
Not all at once. In layers."

SLIDE 6:
"5. She becomes someone who believes in other women.
Because she has been believed in."

SLIDE 7 — CTA:
"This is what Soul Path Collective is building.
Comment YES if you want in."`,
      music: 'N/A — carousel',
      visualLook: 'Rose Clay and Pearl — warm, compelling. Feels like a transformation promise made with love, not pressure. Serif. Clean.',
      caption: 'The room changes everything. Not because of the content or the program. Because of what happens when women who are ready find each other. Comment "YES" and let\'s talk.',
      hashtags: ['#soulpathcollective', '#sisterhoodos', '#womenscommunity', '#transformation', '#communityforwomen', '#spc2026'],
      cta: 'Comment "YES" and let\'s talk',
      status: 'draft'
    },

    {
      id: 'jun-w4-30',
      schedule: { date: '2026-06-27', day: 'Saturday', time: '08:00 WITA' },
      format: 'Reel',
      shootLocation: 'Relaxed Saturday setting — home, cafe, or outdoors. Playful energy.',
      topic: 'The specific luxury of a Saturday with no agenda. Sisters connection / self healing. Light, warm, human. The weekend permission post.',
      quantity: 1,
      purpose: 'entertain',
      visualHook: 'Look up from book / coffee / something pleasurable. Slow smile before speaking.',
      verbalHook: 'A Saturday with no agenda is one of the most feminine things you can do.',
      script: `[0:00–0:04] VISUAL: Sophia with a book or coffee. Unhurried. Warm Saturday light. Looks up slowly.
[0:04–0:09] SPEAK: "A Saturday with no agenda is one of the most feminine things you can do."
[0:09–0:17] SPEAK: "Not the Saturday where you rest until you feel guilty and then make a list. The one where you let yourself not know what comes next for a few hours."
[0:17–0:24] SPEAK: "Where the measure of a good morning is not how much you got done. But how good it felt to just be in it."
[0:24–0:30] SPEAK: "Your body knows how to do this. You just have to stop interrupting it."
[0:30–0:36] VISUAL: Sophia settles back. Comfortable. Unhurried.
[0:36–0:40] SPEAK: "Comment SLAY if you are giving yourself this today."`,
      music: 'Any warm, playful trending audio / OR Corinne Bailey Rae — Like a Star',
      visualLook: 'Saturday morning warm and soft. Cozy, unhurried, light. Sophia completely at ease. The permission post — visually it should feel like rest.',
      caption: 'A morning with nowhere to be and nothing to prove is not laziness. It is medicine. Comment "SLAY" if you are claiming this Saturday.',
      hashtags: ['#saturdaymorning', '#restisproductive', '#sisterhoodos', '#selfhealing', '#slowliving', '#femininerest'],
      cta: 'Comment "SLAY" if you are claiming this Saturday',
      status: 'draft'
    },

    {
      id: 'jun-w4-31',
      schedule: { date: '2026-06-28', day: 'Sunday', time: '08:00 WITA' },
      format: 'Reel',
      shootLocation: 'Reflective setting — journal, tea, Sunday quiet.',
      topic: 'June reflection. What this month held. Honest, warm, human. Trust-building through consistency and presence. Sophia reflects on the month and what she saw in herself and in the community.',
      quantity: 1,
      purpose: 'trust',
      visualHook: 'Open journal, then look up. Journal entry feel.',
      verbalHook: 'June held a lot. I want to sit with it for a moment.',
      script: `[0:00–0:04] VISUAL: Open journal page. Pen resting. Then look up to camera.
[0:04–0:08] SPEAK: "June held a lot. I want to sit with it for a moment."
[0:08–0:18] SPEAK: "SPC Cohort 1 opened. Twenty women said yes to themselves. And I watched something shift in each of them in ways I did not expect and could not have predicted."
[0:18–0:26] SPEAK: "I also had a month of my own becoming. Not just theirs. Mine."
[0:26–0:34] SPEAK: "The thing about building community is that it changes you too. You cannot hold space for transformation and stay the same."
[0:34–0:42] SPEAK: "What did this month hold for you? What shifted? What are you carrying into July?"
[0:42–0:48] SPEAK: "Comment MORE. I want to know."
[0:48–0:52] VISUAL: Sophia closes journal gently. Looks at camera. Warm close.`,
      music: 'Gracie Abrams — I know it won\'t work / OR quiet reflective piano',
      visualLook: 'Sunday reflective. Journal, warm light, no performance. Sophia completely present. Feels like the end of a chapter.',
      caption: 'June was full. Of beginnings, of honesty, of women saying yes to themselves. What did this month hold for you? Comment "MORE" and let\'s reflect together.',
      hashtags: ['#junevibes', '#monthlyreflection', '#sisterhoodos', '#communityjourney', '#womenswellness', '#reflection'],
      cta: 'Comment "MORE" and let\'s reflect together',
      status: 'draft'
    },

    {
      id: 'jun-w4-32',
      schedule: { date: '2026-06-30', day: 'Tuesday', time: '18:00 WITA' },
      format: 'Reel',
      shootLocation: 'Outdoor or open space — something that looks like a doorway or threshold. Forward-looking.',
      topic: 'Welcome July. Bridge post between June and July. Sets the tone for what is coming. Community pillar with forward energy.',
      quantity: 1,
      purpose: 'community',
      visualHook: 'Walking through a doorway or threshold. Stops on the other side. Turns back to camera.',
      verbalHook: 'June is done. July is the room you get to walk into next.',
      script: `[0:00–0:05] VISUAL: Sophia walks through a doorway or gate. Stops on the other side. Turns back to camera. Half-smile.
[0:05–0:09] SPEAK: "June is done. July is the room you get to walk into next."
[0:09–0:17] SPEAK: "Not as the person who is still figuring it out. As the person who figured out enough to keep going."
[0:17–0:25] SPEAK: "Every month is a small threshold. You cross it differently than you crossed the last one."
[0:25–0:32] SPEAK: "What do you want July to hold? Not as a goal. As a feeling."
[0:32–0:38] SPEAK: "Comment SISTER and share one word for your July."
[0:38–0:44] VISUAL: Sophia turns and begins walking forward into the light. Does not look back.`,
      music: 'Novo Amor — Alps / OR something with a sense of new beginning and momentum',
      visualLook: 'Threshold imagery — doorway, gate, open path. Bali outdoor. Forward momentum. Light ahead. Sophia moving into it. Cinematic and hopeful.',
      caption: 'June ends. July begins. You are not the same woman who started this month and that is the whole point. Comment "SISTER" and share one word for your July.',
      hashtags: ['#julymotivation', '#newmonth', '#sisterhoodos', '#womenscommunity', '#monthlyinspiration', '#keepgoing'],
      cta: 'Comment "SISTER" and share one word for your July',
      status: 'draft'
    }

  ] // end posts
}; // end JUNE_CALENDAR
