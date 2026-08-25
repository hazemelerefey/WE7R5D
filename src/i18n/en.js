export default {
  common: {
    brandName: 'DAFE Steel',
    tagline: 'Defect-Aware Surface Enhancement',
    langLabel: 'Language',
    skip: 'Skip to main content',
    mainNav: 'Main navigation',
    onThisPage: 'On this page',
    menu: 'Menu',
    home: 'Home',
    backToTop: 'Back to top',
    nav: {
      technology: 'Technology',
      system: 'The System',
      partners: 'Partners',
      overview: 'Overview',
      railTechnology:
        'The research behind the detection engine: why steel defects need two branches, and what the benchmarks show.',
      railSystem:
        'The complete inspection system across four stages, with the readiness of every module stated plainly.',
      technologyGroups: {
        research: 'Research',
        results: 'Results'
      },
      items: {
        duality: 'Morphological duality',
        dualityDesc: 'Why one filter cannot see two defect families',
        defects: 'Defect library',
        defectsDesc: 'All six classes as annotated NEU-DET samples',
        module: 'The DAFEGate module',
        moduleDesc: 'Dual-branch edge and texture enhancement',
        gradient: 'Additive vs multiplicative',
        gradientDesc: 'The gradient argument behind the design',
        results: 'Benchmark results',
        resultsDesc: 'NEU-DET under a clean 70/20/10 protocol',
        perClass: 'Per-defect accuracy',
        perClassDesc: 'All six defect classes, baseline vs ours',
        limits: 'Limitations',
        limitsDesc: 'What the model does not yet solve',
        architecture: 'System architecture',
        architectureDesc: 'All thirteen modules and their readiness',
        readiness: 'Readiness model',
        readinessDesc: 'What runs today and what does not',
        partnering: 'Partner profiles',
        partneringDesc: 'The four capabilities we are seeking'
      }
    },
    meta: {
      research: 'Research',
      demo: 'Live demo',
      contact: 'Contact'
    },
    cta: {
      exploreSystem: 'Explore the system',
      seeTechnology: 'See the technology',
      becomePartner: 'Become a partner',
      tryDemo: 'Try the live demo',
      readPaper: 'Read the research'
    },
    status: {
      operational: 'Operational',
      development: 'In development',
      partner: 'Partner required',
      concept: 'Concept'
    },
    footer: {
      product: 'Product',
      research: 'Research',
      company: 'Company',
      builtBy: 'Built by the DigiSteel Team',
      program: 'Digilians (MCIT) — Specialized Diploma in Applied AI & Data Analytics',
      rights: 'DAFE Steel. Graduation project — research prototype.',
      disclaimer:
        'Performance figures refer to the NEU-DET public benchmark and are not a warranty of results on a specific production line.'
    }
  },

  figures: {
    hero: 'Hot-rolled steel surface from the NEU-DET benchmark',
    duality: 'Figure 1a — Morphological duality: linear crack defects versus surface texture anomalies.',
    macro: 'Figure 2a — Macro architecture. DAFEGate v4 is inserted at the P3 stage of the YOLOv11n backbone.',
    micro: 'Figure 2b — Inside DAFEGate v4: the edge branch, the variance texture branch, SE attention and the additive skip.',
    featureMaps: 'Figure 3 — Activation maps at P3, showing the edge branch responding to crack structure.',
    efficiency: 'Figure 6 — Accuracy against model complexity. +2.63pp mAP for +3.7% parameters at 145 FPS.',
    defectAlt: 'Annotated {name} defect sample from NEU-DET',
    compare: {
      title: 'Baseline versus DAFEGate-YOLO',
      lead: 'Left: the optimised YOLOv11n baseline. Right: DAFEGate-YOLO on the same image.',
      crazing: 'Crazing — thin, low-contrast cracks',
      pitted: 'Pitted surface — clustered micro-voids',
      scratches: 'Scratches — long linear defects'
    }
  },

  home: {
    stage: {
      eyebrow: 'Industrial surface inspection',
      title: 'Catch the defect before it leaves the mill.',
      lead: 'DAFE Steel is a defect-aware surface inspection system for flat steel production. Our detection engine reads the two visual families of steel defects — thin linear cracks and rough surface anomalies — with a purpose-built dual-branch architecture, in real time on the line.'
    },
    metricsTitle: 'Validated detection performance',
    metricsNote:
      'Measured on the NEU-DET public benchmark (1,800 images, 6 defect classes) under a clean 70/20/10 split with no data leakage.',
    problem: {
      eyebrow: 'The problem',
      title: 'A missed surface defect is not a technical event. It is a commercial one.',
      lead: 'Surface defects that escape inspection travel downstream and become someone else’s discovery — usually the customer’s.',
      items: [
        {
          title: 'Prime coil downgraded to secondary',
          body: 'Defects found late force a whole coil into a lower grade, and the margin difference is lost permanently.'
        },
        {
          title: 'Customer claims and returns',
          body: 'A defect discovered at the customer’s press or galvanising line costs the claim, the freight and the relationship.'
        },
        {
          title: 'Inconsistent manual inspection',
          body: 'Human surface inspection at line speed is fatiguing and variable between shifts. The hardest defects are missed most often.'
        },
        {
          title: 'No quality data trail',
          body: 'Without a defect record per coil there is no trend, no root-cause analysis and no proof of quality for the customer.'
        }
      ]
    },
    systemTeaser: {
      eyebrow: 'The product is the system',
      title: 'A factory does not buy a model. It buys an inspection system.',
      lead: 'Our detection engine is the intelligence layer. A production-grade installation needs twelve more modules around it — acquisition, illumination, plant integration and lifecycle service. We publish the whole architecture, including the parts we have not built yet.',
      stagesTitle: 'Four stages, thirteen modules',
      honestTitle: 'What runs today',
      honestBody:
        'The detection engine and the input domain guard are operational and validated. Grading, coil mapping, the operator station and the retraining loop are in development. Acquisition hardware, plant integration and field service require partners. We would rather show you the real state of the system than a rendering of a finished one.'
    },
    techTeaser: {
      eyebrow: 'The technology',
      title: 'One convolution cannot see two kinds of defect.',
      lead: 'Steel surface defects split into two visual families that need opposite detection strategies. Standard networks apply the same generic filters to both. DAFEGate routes features through a Sobel-initialised edge branch and a local-variance texture branch, then fuses them with channel attention and an additive residual.',
      resultLabel: 'Hardest defect class improved',
      resultValue: '+5.5pp',
      resultNote: 'Crazing AP, 43.6% → 49.1% — validating the edge-branch hypothesis'
    },
    industries: {
      eyebrow: 'Where it applies',
      title: 'Built for the flat steel chain',
      lead: 'Any process where flat steel surface is inspected — not just the hot mill. Every stage below handles coil surface and carries the same escape risk.',
      items: [
        { title: 'Hot rolling', body: 'Hot-rolled coil surface at line speed, the native domain of our training data.' },
        { title: 'Cold rolling', body: 'Post-pickling and cold-reduced strip where surface expectations are tighter.' },
        { title: 'Galvanising & coating', body: 'Zinc and pre-painted lines where coating faults compound base-metal defects.' },
        { title: 'Coil service centres', body: 'Incoming inspection and slitting lines that must certify what they ship.' },
        { title: 'Pipe & tube', body: 'Strip surface verification before forming, where defects become weld failures.' },
        { title: 'Manual inspection lines', body: 'Plants inspecting visually today, with no digital defect record at all.' }
      ]
    },
    partner: {
      eyebrow: 'Partnership',
      title: 'We have the intelligence layer. We are looking for the rest of the system.',
      lead: 'DAFE Steel is an applied-AI team with a validated detection engine and a published architecture. To reach a commissioned line we are seeking partners in machine vision hardware, systems integration, and a pilot mill willing to co-develop.'
    }
  },

  system: {
    stage: {
      eyebrow: 'The system',
      title: 'The full inspection system, and exactly where we stand.',
      lead: 'A production surface inspection installation is thirteen modules across four stages. Two are operational today, five are in development, five need a partner, and one is still a concept. Here is all of it.'
    },
    readiness: {
      title: 'Readiness model',
      lead: 'We use our brand gradient as an honest maturity axis. Each module carries a status, a glyph and a short note — so nothing is implied to be finished that is not.',
      scaleStart: 'Concept',
      scaleEnd: 'Operational',
      countsLabel: 'modules',
      unit: { one: '{n} module', other: '{n} modules' }
    },
    architecture: {
      title: 'System architecture',
      lead: 'Signal flows left to right: surface is imaged, inference runs at the edge, findings become a quality decision, and the decision reaches the plant systems and the service lifecycle.'
    },
    stages: {
      acquisition: { step: 'Stage 01', title: 'Image acquisition' },
      compute: { step: 'Stage 02', title: 'Edge compute & detection' },
      intelligence: { step: 'Stage 03', title: 'Decision & quality intelligence' },
      integration: { step: 'Stage 04', title: 'Plant integration & lifecycle' }
    },
    modules: {
      cameras: {
        name: 'Line-scan camera array',
        note: 'Top and bottom surface coverage, encoder-synchronised to strip speed, resolution set by the smallest defect to be caught.'
      },
      lighting: {
        name: 'Controlled illumination',
        note: 'Bright-field and dark-field LED geometry. Linear cracks and texture anomalies need different light to become visible at all.'
      },
      enclosure: {
        name: 'Enclosure, cooling & mounting',
        note: 'Heat, scale, dust and vibration protection with a mounting frame rated for the mill environment.'
      },
      edge: {
        name: 'Frame grabber & GPU edge node',
        note: 'GigE Vision or CameraLink capture into an industrial GPU node. Our engine sustains 145 FPS, leaving headroom for multiple streams.'
      },
      engine: {
        name: 'DAFEGate-YOLO detection engine',
        note: 'Our contribution. 81.98% mAP@0.5 over six defect classes at 2.69M parameters. Validated and deployable today.'
      },
      guard: {
        name: 'Input domain guard',
        note: 'A CLIP zero-shot gate rejects anything that is not a steel surface before inference, so bad input never produces a confident wrong answer.'
      },
      grading: {
        name: 'Severity grading & disposition',
        note: 'Maps detections to a coil decision — prime, secondary or scrap — against the customer’s own acceptance rules.'
      },
      coilmap: {
        name: 'Coil defect map',
        note: 'Positions every finding along strip length and width to produce a per-coil surface quality map.'
      },
      hmi: {
        name: 'Operator station',
        note: 'Real-time display, alarms and a review queue for the line operator. A working web prototype exists; the industrial HMI does not.'
      },
      dataplatform: {
        name: 'Quality data platform',
        note: 'Historical defect database, trend and SPC reporting, and per-coil quality certificates for customers.'
      },
      plc: {
        name: 'PLC & MES integration',
        note: 'Level-2 and Level-3 connectivity so a disposition becomes an actual routing decision in plant systems, not just a screen.'
      },
      mlops: {
        name: 'Retraining loop',
        note: 'Retraining on the customer’s own steel with versioning and drift monitoring. This loop is our long-term defensibility.'
      },
      service: {
        name: 'Installation & field service',
        note: 'Mechanical installation, optical calibration, commissioning, spares and a response SLA.'
      }
    },
    today: {
      title: 'Read this before the rest',
      body: 'DAFE Steel is a research prototype, not a commissioned product. Our engine is trained on the NEU-DET public benchmark — not on any specific mill’s steel — so any deployment begins with a pilot to capture real production images and retrain. We are stating this plainly because an inspection vendor that overstates readiness is a liability on a production line.'
    },
    partners: {
      eyebrow: 'What we need',
      title: 'Four partner profiles',
      lead: 'These are the capabilities we do not have in-house. Each one maps directly to modules marked “partner required” above.',
      items: [
        {
          title: 'Machine vision hardware',
          body: 'Line-scan cameras, optics and industrial illumination, with application engineering to specify resolution and lighting geometry for a given line.',
          modules: 'Modules 1–2'
        },
        {
          title: 'System integrator',
          body: 'Panel building, mechanical installation, PLC and Level-2 connectivity, commissioning and ongoing field service in Egypt.',
          modules: 'Modules 3, 11, 13'
        },
        {
          title: 'Pilot mill',
          body: 'A flat steel producer or coil processor willing to host an instrumented pilot. In exchange for access they get the system at pilot terms and shape the grading rules.',
          modules: 'All stages'
        },
        {
          title: 'Quality systems partner',
          body: 'MES, Level-2 or quality-management expertise to turn detections into certificates, SPC trends and auditable quality records.',
          modules: 'Modules 7, 8, 10'
        }
      ]
    },
    contact: {
      title: 'Talk to the team',
      lead: 'We are open about the state of the system and specific about what a pilot would involve. If any of the four profiles above describes you, we would like to talk.',
      teamLabel: 'Team',
      teamValue: 'DigiSteel Team — DAFE Steel',
      focusLabel: 'Focus',
      focusValue: 'Flat steel surface defect detection',
      demoLabel: 'Live demo',
      langsLabel: 'Languages',
      langsValue: 'Arabic, English'
    }
  },

  technology: {
    stage: {
      eyebrow: 'Technology',
      title: 'Two defect families. Two branches. One residual.',
      lead: 'DAFEGate is a lightweight module inserted into the YOLOv11n backbone that stops treating steel defects as one visual problem. It adds 3.7% parameters and 2.63 percentage points of mAP.'
    },
    duality: {
      eyebrow: 'The core insight',
      title: 'Morphological duality',
      lead: 'Steel surface defects divide into two families whose visual signatures are opposites. A standard convolution learns one shared set of filters and compromises on both.',
      cueLabel: 'Detection cue',
      classesLabel: 'Classes',
      items: [
        {
          title: 'Linear defects',
          classes: 'Crazing, scratches',
          pattern: 'Thin high-frequency cracks and lines, often only a few pixels wide.',
          cue: 'Edge response — spatial gradient'
        },
        {
          title: 'Surface anomalies',
          classes: 'Inclusion, patches, pitted surface, rolled-in scale',
          pattern: 'Low-frequency roughness and irregularity spread over a region.',
          cue: 'Local variance — texture energy'
        }
      ],
      gap: 'Across the eleven papers we reviewed, no existing model separates edge and texture processing into dedicated branches at the feature-extraction stage. That gap is what DAFEGate fills.'
    },
    defects: {
      navLabel: 'Defect library',
      eyebrow: 'Defect library',
      title: 'The six defect classes, as the model sees them',
      lead: 'Real annotated samples from the NEU-DET benchmark. Green boxes are ground-truth labels. Each class carries the AP our model reaches and the change against the baseline.'
    },
    module: {
      eyebrow: 'Architecture',
      title: 'The DAFEGate module',
      lead: 'Inserted once at the P3 stage of the backbone — 80×80 feature maps, 256 channels. Each branch receives half the channels, which forces them to specialise instead of learning the same thing twice.',
      steps: [
        { tag: 'Input', title: 'Feature map from backbone P3', math: 'x ∈ ℝ^(B×256×80×80)' },
        { tag: 'Branch A', title: 'Sobel-initialised edge convolution', math: 'E = SiLU(BN(Conv_sobel(x)))  → C/2' },
        { tag: 'Branch B', title: 'Local-variance texture branch', math: 'v = AvgPool(x²) − AvgPool(x)²  → T' },
        { tag: 'Fuse', title: 'Concatenate + squeeze-excite attention', math: 'a = σ(W₂·ReLU(W₁·GAP(F))),  r = 8' },
        { tag: 'Output', title: 'Additive residual with learnable gate', math: 'y = x + σ(α)·h,   α_init = −2.2' }
      ],
      notesTitle: 'Why each choice',
      notes: [
        {
          k: 'Sobel initialisation, not fixed filters',
          v: 'The first two filters start as Sobel-X and Sobel-Y, then stay fully learnable. A domain-informed starting point without freezing the model into it.'
        },
        {
          k: 'Analytical variance, no parameters',
          v: 'The texture branch computes local variance directly from pooling identities, so it costs almost nothing while modelling surface roughness explicitly.'
        },
        {
          k: 'Half channels per branch',
          v: 'Full-width branches converged to nearly identical representations. Halving the budget forces a complementary split.'
        },
        {
          k: 'Placed once, at P3 only',
          v: 'P3 carries the right spatial scale for these defects. Adding a second module at P2 overfitted a 1,290-image training set.'
        }
      ]
    },
    gradient: {
      eyebrow: 'The decisive detail',
      title: 'Additive residual beats multiplicative gating',
      lead: 'Our earlier version multiplied features by a learned gate. It scored higher than baseline but trained badly — the loss gap widened steadily for 300 epochs. The reason is visible in the derivative.',
      tableCaption: 'Multiplicative gate versus additive residual',
      cols: { property: 'Property', mult: 'Multiplicative (v3)', add: 'Additive (v4)' },
      rows: [
        { p: 'Gradient to backbone', m: '∂y/∂x = σ(g) ≤ 1', a: '∂y/∂x = 1 always' },
        { p: 'Box loss at epoch 300', m: '1.2432 (+0.144 vs baseline)', a: '1.0956 (tracks baseline)' },
        { p: 'Recall', m: '73.53%', a: '79.79%' },
        { p: 'mAP@0.5', m: '80.16%', a: '81.98%' }
      ],
      conclusion:
        'A multiplicative gate can suppress its own gradient. The additive skip guarantees the backbone keeps learning regardless of how the enhancement branch behaves — worth more in practice than the extra expressiveness the gate offers.'
    },
    results: {
      eyebrow: 'Results',
      title: 'Measured against our own optimised baseline',
      lead: 'Both models use an identical training recipe, so the delta isolates the module rather than the schedule.',
      cols: { metric: 'Metric', baseline: 'Baseline (YOLOv11n)', ours: 'DAFEGate-YOLO', delta: 'Δ' },
      protocolTitle: 'On protocol honesty',
      protocolBody:
        'Three published papers report 94–95% mAP on NEU-DET. Those results come from training at native 200×200 resolution, adding a second dataset, or augmenting before splitting. Under a clean 70/20/10 split at 640px the honest ceiling in the literature is roughly 83–85%. We report against that ceiling, not against the headline numbers.'
    },
    perClass: {
      eyebrow: 'Per-defect accuracy',
      title: 'Where the gain actually landed',
      lead: 'Improvement concentrated on the two hardest classes. Crazing — thin, low-contrast, the weakest class in every paper we reviewed — gained the most, which is the clearest evidence that the edge branch does what it was designed to do.',
      legendBaseline: 'Baseline',
      legendOurs: 'DAFEGate-YOLO',
      familyLinear: 'Linear',
      familyTexture: 'Texture'
    },
    literature: {
      eyebrow: 'Comparison',
      title: 'Against comparable published work',
      lead: 'Restricted to papers using a clean, comparable protocol on NEU-DET. We lead on localisation precision (mAP@0.5:0.95) among every model in this table.',
      cols: { model: 'Model', base: 'Base', map: 'mAP@0.5', map95: 'mAP@0.5:0.95', params: 'Params', fps: 'FPS' },
      ours: 'DAFEGate-YOLO (ours)'
    },
    limits: {
      eyebrow: 'Limitations',
      title: 'What this model does not yet solve',
      lead: 'Stated directly, because these are the questions an engineer at a mill will ask.',
      items: [
        {
          title: 'Sensitive to high-frequency noise',
          body: 'The Sobel branch amplifies genuine edges and pixel noise alike. Under added Gaussian noise it trails the baseline slightly. A low-pass stage before the edge convolution is the intended fix.'
        },
        {
          title: 'Overlapping defects get conflated',
          body: 'When two textures occupy the same region — patches over rolled-in scale — the variance branch mixes them. Separating these needs a segmentation head rather than boxes.'
        },
        {
          title: 'Clipped ground truth caps the score',
          body: '56.6% of NEU-DET boxes touch the image border, so the labels understate the real defect extent and correct detections get penalised by the IoU threshold.'
        },
        {
          title: 'Not trained on your steel',
          body: 'Training used a public benchmark of 1,800 images at 200×200. Any real line differs in optics, lighting and defect mix, so a pilot and retraining are mandatory, not optional.'
        }
      ]
    }
  }
}
