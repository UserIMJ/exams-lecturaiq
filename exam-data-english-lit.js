const examData = {
  passage1: [
    {
      question: "The speaker's overall attitude toward Death can best be described as:",
      choices: [
        "fearful and submissive",
        "defiant and contemptuous",
        "sorrowful and resigned",
        "curious and philosophical",
        "reverent and awed"
      ],
      correct: "B",
      explanation: "The speaker directly challenges Death ('be not proud') and systematically argues that Death is weak, powerless, and ultimately will be destroyed. This is defiant and contemptuous, not fearful or reverent."
    },
    {
      question: "The opening line \"Death, be not proud\" is an example of:",
      choices: [
        "simile",
        "hyperbole",
        "apostrophe",
        "alliteration",
        "understatement"
      ],
      correct: "C",
      explanation: "Apostrophe is when a speaker addresses an absent or non-human entity as if it were present and capable of understanding. The speaker directly addresses Death as 'thou.'"
    },
    {
      question: "In lines 5–6, \"rest and sleep, which but thy pictures be, / Much pleasure,\" the speaker argues that:",
      choices: [
        "death is painful and to be avoided",
        "sleep and rest are inferior to death",
        "if sleep brings pleasure, death must bring even greater pleasure",
        "rest and sleep are more powerful than death",
        "death is merely a form of dreamless sleep"
      ],
      correct: "C",
      explanation: "The speaker uses an a fortiori argument: if sleep (a mere image of death) brings pleasure, then death itself must bring even more pleasure. This undermines death's terror."
    },
    {
      question: "The phrase \"soonest our best men with thee do go\" (line 7) suggests:",
      choices: [
        "Death targets the weak and cowardly",
        "the virtuous die young, implying death is an honor",
        "the best men fear death most",
        "death comes randomly without preference",
        "good men resist death longest"
      ],
      correct: "B",
      explanation: "The best people die soonest, which the speaker presents as evidence that death is not something to be proud of—it's actually a privilege to die, making death a servant rather than a master."
    },
    {
      question: "\"Thou art slave to fate, chance, kings, and desperate men\" (line 9) functions primarily to:",
      choices: [
        "elevate Death to a position of cosmic authority",
        "demonstrate Death's independence from human affairs",
        "undermine Death's power by showing its servitude",
        "argue that fate is more powerful than kings",
        "show that desperate men control fate"
      ],
      correct: "C",
      explanation: "By calling Death a 'slave' to external forces, the speaker diminishes Death's power. Death doesn't act independently; it's controlled by fate, chance, and human agents."
    },
    {
      question: "The reference to \"poppy or charms\" (line 11) most likely alludes to:",
      choices: [
        "natural beauty that outlasts death",
        "opium and magic spells that induce sleep as effectively as death",
        "the flowers placed on graves",
        "the charms of a beloved person",
        "religious rituals for the dying"
      ],
      correct: "B",
      explanation: "Poppy refers to opium (a sleep-inducing drug), and charms refers to magic or spells. The speaker argues these can produce sleep just as well as death can, further diminishing death's power."
    },
    {
      question: "\"Why swell'st thou then?\" (line 12) is best understood as:",
      choices: [
        "a sincere question about Death's anatomy",
        "a rhetorical question challenging Death's pride",
        "an accusation that Death is physically dangerous",
        "a metaphor for the expansion of mortality",
        "an expression of genuine curiosity"
      ],
      correct: "B",
      explanation: "'Swell' means to be puffed up with pride. The speaker asks rhetorically: if death is so weak and subordinate, why does it act proud? This reinforces the contemptuous tone."
    },
    {
      question: "The poem's volta (turn) occurs most prominently at:",
      choices: [
        "line 1 (\"Death, be not proud\")",
        "line 5 (\"From rest and sleep\")",
        "line 9 (\"Thou art slave to fate\")",
        "line 13 (\"One short sleep past\")",
        "the final couplet (\"And death shall be no more\")"
      ],
      correct: "D",
      explanation: "Line 13 marks the shift from argument to triumphant conclusion. The speaker moves from undermining death's power to declaring its ultimate defeat through Christian resurrection."
    },
    {
      question: "The final paradox \"Death, thou shalt die\" (line 14) is based on the argument that:",
      choices: [
        "death fears its own mortality",
        "death will be destroyed by the eternal life promised by Christian faith",
        "death is a self-defeating force",
        "death cannot kill those who do not fear it",
        "death and sleep are indistinguishable"
      ],
      correct: "B",
      explanation: "In Christian theology, death is temporary; after the resurrection, death itself will cease to exist. The paradox is that death (a permanent end) will itself end permanently."
    },
    {
      question: "The rhyme scheme of this sonnet is best described as:",
      choices: [
        "Shakespearean (three quatrains and a couplet)",
        "Spenserian (interlocking rhymes across quatrains)",
        "Petrarchan (octave and sestet)",
        "free verse with occasional rhyme",
        "terza rima"
      ],
      correct: "C",
      explanation: "This is a Petrarchan (Italian) sonnet with an octave (8 lines) and sestet (6 lines). The rhyme scheme is ABBAABBA CDCDEE, characteristic of Petrarchan form."
    },
    {
      question: "The tone of the poem shifts from the opening to the conclusion in which of the following ways?",
      choices: [
        "From grief to acceptance",
        "From challenge and argument to triumphant assertion",
        "From reverence to mockery",
        "From anger to resignation",
        "From confusion to clarity"
      ],
      correct: "B",
      explanation: "The poem begins with defiant challenge ('be not proud') and builds through logical argument to a triumphant, faith-based assertion that death will be destroyed."
    },
    {
      question: "Donne's personification of Death as a proud figure serves primarily to:",
      choices: [
        "make Death seem more threatening and omnipotent",
        "allow the speaker to directly argue against Death as if it were a rival",
        "establish Death as a sympathetic character",
        "suggest Death has human emotions and vulnerabilities",
        "both B and D"
      ],
      correct: "E",
      explanation: "By personifying Death, Donne allows the speaker to address it directly as a rival (B) and attributes human flaws like pride and vulnerability to it (D), making it easier to defeat rhetorically."
    },
    {
      question: "The poem's argument is most closely aligned with which of the following worldviews?",
      choices: [
        "Existentialist — death is the ultimate absurdity",
        "Stoic — one should be indifferent to death",
        "Christian — eternal life renders physical death meaningless",
        "Epicurean — death should not be feared because it is simply non-existence",
        "Nihilist — nothing, including death, has ultimate meaning"
      ],
      correct: "C",
      explanation: "The poem's conclusion ('we wake eternally / And death shall be no more') is explicitly Christian, rooted in the belief in resurrection and eternal life that conquers death."
    }
  ],
  passage2: [
    {
      question: "The opening sentence \"It is a truth universally acknowledged...\" is best understood as:",
      choices: [
        "a sincere statement of social fact",
        "ironic — the \"truth\" is actually a social prejudice held by certain families",
        "a philosophical argument about marriage",
        "a direct quotation from Mrs. Bennet",
        "a statement the narrator fully endorses"
      ],
      correct: "B",
      explanation: "Austen uses irony here. The 'universal truth' is actually just the self-interested assumption of marriage-minded families. The gap between 'universally acknowledged' and the narrow mercenary thinking creates satirical distance."
    },
    {
      question: "The phrase \"rightful property of some one or other of their daughters\" characterizes the attitude of the surrounding families as:",
      choices: [
        "generous and welcoming",
        "possessive and mercenary regarding marriage",
        "indifferent to the newcomer's fortune",
        "genuinely concerned for the young man's happiness",
        "suspicious of wealthy newcomers"
      ],
      correct: "B",
      explanation: "The language of 'property' reveals the transactional, mercenary view of marriage held by these families. Bingley is seen as an asset to be claimed, not a person."
    },
    {
      question: "Mr. Bennet's response \"You want to tell me, and I have no objection to hearing it\" reveals his character as:",
      choices: [
        "genuinely enthusiastic about the news",
        "passively ironic and detached from his wife's excitement",
        "rude and openly hostile to Mrs. Bennet",
        "deeply interested in finding husbands for his daughters",
        "confused about why his wife is speaking"
      ],
      correct: "B",
      explanation: "Mr. Bennet's dry, understated response shows his detachment and subtle mockery of his wife's enthusiasm. He's humoring her rather than sharing her excitement."
    },
    {
      question: "Mrs. Bennet's extended description of Bingley's arrival (\"he came down on Monday in a chaise and four...\") primarily serves to:",
      choices: [
        "provide accurate historical detail about Regency-era travel",
        "reveal her obsession with wealth and social status through excessive detail",
        "establish Bingley as the novel's protagonist",
        "show Mrs. Bennet's superior knowledge of local affairs",
        "create suspense about Bingley's character"
      ],
      correct: "B",
      explanation: "The minutiae about his mode of travel ('chaise and four') and financial arrangements reveal Mrs. Bennet's fixation on wealth and status markers. This characterizes her as superficial and mercenary."
    },
    {
      question: "Mr. Bennet's question \"Is that his design in settling here?\" is best described as:",
      choices: [
        "a genuine inquiry about Bingley's intentions",
        "dry irony — he knows perfectly well it is not Bingley's design",
        "an expression of concern for his daughters",
        "evidence that Mr. Bennet supports his wife's matchmaking",
        "a sign of Mr. Bennet's ignorance of social customs"
      ],
      correct: "B",
      explanation: "Mr. Bennet knows Bingley hasn't moved there to marry his daughters. The question is sarcastic, mocking his wife's assumption that Bingley's sole purpose is to provide her daughters with husbands."
    },
    {
      question: "When Mr. Bennet suggests that Mrs. Bennet might attend the visit because \"Mr. Bingley might like you the best of the party,\" the remark is:",
      choices: [
        "a sincere compliment to his wife's enduring beauty",
        "a backhanded compliment designed to tease and deflect",
        "an argument that Mrs. Bennet should stay home",
        "evidence of Mr. Bennet's genuine affection",
        "a statement that reveals his jealousy"
      ],
      correct: "B",
      explanation: "This is classic Mr. Bennet wit: a superficial compliment that's actually mockery. He's deflecting his wife's pressure for him to visit Bingley by playfully (but insincerely) flattering her."
    },
    {
      question: "The narrative voice in this passage can best be described as:",
      choices: [
        "omniscient and sympathetic to Mrs. Bennet",
        "first-person and personally involved",
        "omniscient with an ironic, satirical distance",
        "limited third-person from Mr. Bennet's perspective",
        "objective and without authorial commentary"
      ],
      correct: "C",
      explanation: "The narrator has omniscient knowledge but maintains ironic distance, particularly in the opening 'universal truth' line. The satire is gentle but clear throughout."
    },
    {
      question: "Mrs. Bennet's complaint \"You take delight in vexing me. You have no compassion for my poor nerves\" characterizes her primarily as:",
      choices: [
        "genuinely ill and in need of sympathy",
        "dramatically self-pitying and prone to exaggeration",
        "a woman whose concerns deserve serious attention",
        "perceptive about her husband's character flaws",
        "emotionally fragile in a sympathetic way"
      ],
      correct: "B",
      explanation: "Mrs. Bennet's constant references to her 'nerves' are comic exaggeration. She's not genuinely ill; she's using dramatics to manipulate and gain sympathy."
    },
    {
      question: "Mr. Bennet's reply \"They are my old friends. I have heard you mention them with consideration these last twenty years\" is best described as:",
      choices: [
        "genuine concern for his wife's health",
        "biting wit at his wife's expense — treating her complaints as a long-running performance",
        "an apology for his earlier teasing",
        "evidence that he takes her nerves seriously",
        "an indication of his affection"
      ],
      correct: "B",
      explanation: "Mr. Bennet mockingly refers to her nerves as 'old friends,' implying she's been complaining about them for two decades. This is sardonic humor, not sympathy."
    },
    {
      question: "The social critique embedded in this passage focuses primarily on:",
      choices: [
        "the cruelty of the English class system",
        "the limited options available to women, who must secure their futures through marriage",
        "the hypocrisy of religious institutions",
        "the dangers of romantic love",
        "the corruption of the aristocracy"
      ],
      correct: "B",
      explanation: "The frantic matchmaking reveals the economic necessity of marriage for women in Austen's era. Without independent means, women like the Bennet daughters had to marry well to secure their futures."
    },
    {
      question: "Mr. Bennet's preference for Lizzy, revealed in \"I must throw in a good word for my little Lizzy,\" suggests:",
      choices: [
        "he believes Lizzy is the most beautiful",
        "he values intelligence and quickness over conventional feminine virtues",
        "he is trying to manipulate Mrs. Bennet",
        "Lizzy is his favorite because she is most obedient",
        "he thinks Lizzy will make the best match financially"
      ],
      correct: "B",
      explanation: "Mr. Bennet explicitly says Lizzy has 'something more of quickness than her sisters.' He values her intelligence and wit, qualities that mirror his own, over beauty or conventionality."
    },
    {
      question: "The comic effect of this opening passage relies primarily on:",
      choices: [
        "slapstick physical humor",
        "the gap between what characters say and what the narrator implies about their motives",
        "exaggerated descriptions of setting and landscape",
        "the absurdity of Bingley's behavior",
        "direct authorial commentary on the characters' foolishness"
      ],
      correct: "B",
      explanation: "Austen's comedy is ironic: characters speak and act earnestly, but the narrator subtly reveals their true (often mercenary or foolish) motivations. The gap creates humor."
    },
    {
      question: "Austen's technique of allowing characters to reveal themselves entirely through dialogue, with minimal authorial intrusion, is closest to which of the following narrative techniques?",
      choices: [
        "stream of consciousness",
        "dramatic monologue",
        "free indirect discourse and dramatic dialogue",
        "epistolary narration",
        "unreliable first-person narration"
      ],
      correct: "C",
      explanation: "Austen uses free indirect discourse (blending narrator and character perspective) combined with extensive dialogue. This allows characters to reveal themselves without heavy-handed authorial judgment."
    }
  ]
};
