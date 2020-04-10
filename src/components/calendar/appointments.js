const appointments = [
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-24T11:00:00.909Z",
      "endDate": "2020-04-24T11:50:00.909Z",
      "location": "WCHMAN 00306",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 38648
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-20T11:00:00.909Z",
      "endDate": "2020-04-20T11:50:00.909Z",
      "location": "WCHMAN 00306",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41465
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-22T12:00:00.909Z",
      "endDate": "2020-04-22T12:50:00.909Z",
      "location": "BIOSCI 00332",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41467
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-22T13:00:00.909Z",
      "endDate": "2020-04-22T13:50:00.909Z",
      "location": "WCHMAN 00010",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41470
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-20T14:00:00.909Z",
      "endDate": "2020-04-20T14:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41472
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-22T14:00:00.909Z",
      "endDate": "2020-04-22T14:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41473
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-20T16:00:00.909Z",
      "endDate": "2020-04-20T16:50:00.909Z",
      "location": "WCHMAN 00009",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41475
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-22T16:00:00.909Z",
      "endDate": "2020-04-22T16:50:00.909Z",
      "location": "WCHMAN 00009",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41476
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-24T16:00:00.909Z",
      "endDate": "2020-04-24T16:50:00.909Z",
      "location": "WCHMAN 00009",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41477
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-20T17:00:00.909Z",
      "endDate": "2020-04-20T17:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41478
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-22T17:00:00.909Z",
      "endDate": "2020-04-22T17:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41479
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-24T17:00:00.909Z",
      "endDate": "2020-04-24T17:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41480
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-20T18:00:00.909Z",
      "endDate": "2020-04-20T18:50:00.909Z",
      "location": "WCHMAN 00307",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41481
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-22T18:00:00.909Z",
      "endDate": "2020-04-22T18:50:00.909Z",
      "location": "WCHMAN 00307",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41482
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-24T18:00:00.909Z",
      "endDate": "2020-04-24T18:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41483
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-20T19:00:00.909Z",
      "endDate": "2020-04-20T19:50:00.909Z",
      "location": "BEURY 00415",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41484
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-20T19:00:00.909Z",
      "endDate": "2020-04-20T19:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41486
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-21T11:00:00.909Z",
      "endDate": "2020-04-21T11:50:00.909Z",
      "location": "BIOSCI 00342",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41487
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-21T12:30:00.909Z",
      "endDate": "2020-04-21T13:20:00.909Z",
      "location": "BIOSCI 00342",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41493
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-23T12:30:00.909Z",
      "endDate": "2020-04-23T13:20:00.909Z",
      "location": "BIOSCI 00342",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41494
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-21T14:00:00.909Z",
      "endDate": "2020-04-21T14:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41499
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-21T15:30:00.909Z",
      "endDate": "2020-04-21T16:20:00.909Z",
      "location": "WCHMAN 00011",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41504
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-23T15:30:00.909Z",
      "endDate": "2020-04-23T16:20:00.909Z",
      "location": "WCHMAN 00406",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41505
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-24T12:00:00.909Z",
      "endDate": "2020-04-24T12:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41506
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-21T12:30:00.909Z",
      "endDate": "2020-04-21T13:20:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41507
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-21T18:30:00.909Z",
      "endDate": "2020-04-21T19:20:00.909Z",
      "location": "BEURY 00413",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41508
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-23T14:00:00.909Z",
      "endDate": "2020-04-23T14:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41509
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-23T14:00:00.909Z",
      "endDate": "2020-04-23T14:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41511
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-20T20:00:00.909Z",
      "endDate": "2020-04-20T20:50:00.909Z",
      "location": "BIOSCI 00332",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41512
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-21T11:00:00.909Z",
      "endDate": "2020-04-21T11:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41515
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-23T11:00:00.909Z",
      "endDate": "2020-04-23T11:50:00.909Z",
      "location": "BEURY 00413",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41516
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-23T18:30:00.909Z",
      "endDate": "2020-04-23T19:20:00.909Z",
      "location": "WCHMAN 00407",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41528
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Joanne A. Nichols", "Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 21332
    },
    {
      "startDate": "2020-04-21T18:30:00.909Z",
      "endDate": "2020-04-21T19:20:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41531
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-24T11:00:00.909Z",
      "endDate": "2020-04-24T11:50:00.909Z",
      "location": "WCHMAN 00306",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 38648
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-20T11:00:00.909Z",
      "endDate": "2020-04-20T11:50:00.909Z",
      "location": "WCHMAN 00306",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41465
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-22T12:00:00.909Z",
      "endDate": "2020-04-22T12:50:00.909Z",
      "location": "BIOSCI 00332",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41467
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-22T13:00:00.909Z",
      "endDate": "2020-04-22T13:50:00.909Z",
      "location": "WCHMAN 00010",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41470
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-20T14:00:00.909Z",
      "endDate": "2020-04-20T14:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41472
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-22T14:00:00.909Z",
      "endDate": "2020-04-22T14:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41473
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-20T16:00:00.909Z",
      "endDate": "2020-04-20T16:50:00.909Z",
      "location": "WCHMAN 00009",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41475
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-22T16:00:00.909Z",
      "endDate": "2020-04-22T16:50:00.909Z",
      "location": "WCHMAN 00009",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41476
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-24T16:00:00.909Z",
      "endDate": "2020-04-24T16:50:00.909Z",
      "location": "WCHMAN 00009",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41477
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-20T17:00:00.909Z",
      "endDate": "2020-04-20T17:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41478
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-22T17:00:00.909Z",
      "endDate": "2020-04-22T17:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41479
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-24T17:00:00.909Z",
      "endDate": "2020-04-24T17:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41480
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-20T18:00:00.909Z",
      "endDate": "2020-04-20T18:50:00.909Z",
      "location": "WCHMAN 00307",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41481
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-22T18:00:00.909Z",
      "endDate": "2020-04-22T18:50:00.909Z",
      "location": "WCHMAN 00307",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41482
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-24T18:00:00.909Z",
      "endDate": "2020-04-24T18:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41483
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-20T19:00:00.909Z",
      "endDate": "2020-04-20T19:50:00.909Z",
      "location": "BEURY 00415",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41484
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-20T19:00:00.909Z",
      "endDate": "2020-04-20T19:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41486
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-21T11:00:00.909Z",
      "endDate": "2020-04-21T11:50:00.909Z",
      "location": "BIOSCI 00342",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41487
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-21T12:30:00.909Z",
      "endDate": "2020-04-21T13:20:00.909Z",
      "location": "BIOSCI 00342",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41493
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-23T12:30:00.909Z",
      "endDate": "2020-04-23T13:20:00.909Z",
      "location": "BIOSCI 00342",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41494
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-21T14:00:00.909Z",
      "endDate": "2020-04-21T14:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41499
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-21T15:30:00.909Z",
      "endDate": "2020-04-21T16:20:00.909Z",
      "location": "WCHMAN 00011",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41504
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-23T15:30:00.909Z",
      "endDate": "2020-04-23T16:20:00.909Z",
      "location": "WCHMAN 00406",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41505
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-24T12:00:00.909Z",
      "endDate": "2020-04-24T12:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41506
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-21T12:30:00.909Z",
      "endDate": "2020-04-21T13:20:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41507
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-21T18:30:00.909Z",
      "endDate": "2020-04-21T19:20:00.909Z",
      "location": "BEURY 00413",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41508
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-23T14:00:00.909Z",
      "endDate": "2020-04-23T14:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41509
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-23T14:00:00.909Z",
      "endDate": "2020-04-23T14:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41511
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-20T20:00:00.909Z",
      "endDate": "2020-04-20T20:50:00.909Z",
      "location": "BIOSCI 00332",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41512
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-21T11:00:00.909Z",
      "endDate": "2020-04-21T11:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41515
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-23T11:00:00.909Z",
      "endDate": "2020-04-23T11:50:00.909Z",
      "location": "BEURY 00413",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41516
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-23T18:30:00.909Z",
      "endDate": "2020-04-23T19:20:00.909Z",
      "location": "WCHMAN 00407",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41528
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-13T12:00:00.909Z",
      "endDate": "2020-04-13T13:50:00.909Z",
      "location": "SERC 00359",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-14T17:00:00.909Z",
      "endDate": "2020-04-14T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-16T17:00:00.909Z",
      "endDate": "2020-04-16T18:20:00.909Z",
      "location": "SERC 00116",
      "instructors": ["Andrew B. Rosen"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 26360
    },
    {
      "startDate": "2020-04-21T18:30:00.909Z",
      "endDate": "2020-04-21T19:20:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41531
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-24T11:00:00.909Z",
      "endDate": "2020-04-24T11:50:00.909Z",
      "location": "WCHMAN 00306",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 38648
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-20T11:00:00.909Z",
      "endDate": "2020-04-20T11:50:00.909Z",
      "location": "WCHMAN 00306",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41465
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-20T12:00:00.909Z",
      "endDate": "2020-04-20T12:50:00.909Z",
      "location": "BIOSCI 00332",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41466
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-22T12:00:00.909Z",
      "endDate": "2020-04-22T12:50:00.909Z",
      "location": "BIOSCI 00332",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41467
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-20T12:00:00.909Z",
      "endDate": "2020-04-20T12:50:00.909Z",
      "location": "BEURY 00119",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41468
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-22T13:00:00.909Z",
      "endDate": "2020-04-22T13:50:00.909Z",
      "location": "WCHMAN 00010",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41470
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-20T14:00:00.909Z",
      "endDate": "2020-04-20T14:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41472
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-22T14:00:00.909Z",
      "endDate": "2020-04-22T14:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41473
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-20T16:00:00.909Z",
      "endDate": "2020-04-20T16:50:00.909Z",
      "location": "WCHMAN 00009",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41475
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-22T16:00:00.909Z",
      "endDate": "2020-04-22T16:50:00.909Z",
      "location": "WCHMAN 00009",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41476
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-24T16:00:00.909Z",
      "endDate": "2020-04-24T16:50:00.909Z",
      "location": "WCHMAN 00009",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41477
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-20T17:00:00.909Z",
      "endDate": "2020-04-20T17:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41478
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-22T17:00:00.909Z",
      "endDate": "2020-04-22T17:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41479
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-24T17:00:00.909Z",
      "endDate": "2020-04-24T17:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41480
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-20T18:00:00.909Z",
      "endDate": "2020-04-20T18:50:00.909Z",
      "location": "WCHMAN 00307",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41481
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-22T18:00:00.909Z",
      "endDate": "2020-04-22T18:50:00.909Z",
      "location": "WCHMAN 00307",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41482
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-24T18:00:00.909Z",
      "endDate": "2020-04-24T18:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41483
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-20T19:00:00.909Z",
      "endDate": "2020-04-20T19:50:00.909Z",
      "location": "BEURY 00415",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41484
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-20T19:00:00.909Z",
      "endDate": "2020-04-20T19:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41486
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-21T11:00:00.909Z",
      "endDate": "2020-04-21T11:50:00.909Z",
      "location": "BIOSCI 00342",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41487
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-21T12:30:00.909Z",
      "endDate": "2020-04-21T13:20:00.909Z",
      "location": "BIOSCI 00342",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41493
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-23T12:30:00.909Z",
      "endDate": "2020-04-23T13:20:00.909Z",
      "location": "BIOSCI 00342",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41494
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-21T14:00:00.909Z",
      "endDate": "2020-04-21T14:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41499
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-21T15:30:00.909Z",
      "endDate": "2020-04-21T16:20:00.909Z",
      "location": "WCHMAN 00011",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41504
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-23T15:30:00.909Z",
      "endDate": "2020-04-23T16:20:00.909Z",
      "location": "WCHMAN 00406",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41505
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-24T12:00:00.909Z",
      "endDate": "2020-04-24T12:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41506
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-21T12:30:00.909Z",
      "endDate": "2020-04-21T13:20:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41507
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-21T18:30:00.909Z",
      "endDate": "2020-04-21T19:20:00.909Z",
      "location": "BEURY 00413",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41508
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-23T14:00:00.909Z",
      "endDate": "2020-04-23T14:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41509
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-23T14:00:00.909Z",
      "endDate": "2020-04-23T14:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41511
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-20T20:00:00.909Z",
      "endDate": "2020-04-20T20:50:00.909Z",
      "location": "BIOSCI 00332",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41512
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-21T11:00:00.909Z",
      "endDate": "2020-04-21T11:50:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41515
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-23T11:00:00.909Z",
      "endDate": "2020-04-23T11:50:00.909Z",
      "location": "BEURY 00413",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41516
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-21T17:00:00.909Z",
      "endDate": "2020-04-21T17:50:00.909Z",
      "location": "WCHMAN 00009",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41517
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-23T17:00:00.909Z",
      "endDate": "2020-04-23T17:50:00.909Z",
      "location": "WCHMAN 00009",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41526
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-23T18:30:00.909Z",
      "endDate": "2020-04-23T19:20:00.909Z",
      "location": "WCHMAN 00407",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41528
    },
    {
      "startDate": "2020-04-10T13:00:00.909Z",
      "endDate": "2020-04-10T13:50:00.909Z",
      "location": "BEURY 00160",
      "instructors": ["Nancy Polychronopoulou"],
      "title": "CIS-1001 Introduction to Academics in Computer Science",
      "campus": "MN",
      "crn": 5313
    },
    {
      "startDate": "2020-04-14T20:30:00.909Z",
      "endDate": "2020-04-14T23:00:00.909Z",
      "location": "SERC 00206",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-16T20:30:00.909Z",
      "endDate": "2020-04-16T23:00:00.909Z",
      "location": "SERC 00357",
      "instructors": ["Amitangshu Pal"],
      "title": "CIS-1051 Introduction to Problem Solving and Programming in Python",
      "campus": "MN",
      "crn": 30804
    },
    {
      "startDate": "2020-04-21T18:30:00.909Z",
      "endDate": "2020-04-21T19:20:00.909Z",
      "location": "BIOSCI 00133",
      "instructors": ["Evelyn Vleck"],
      "title": "SCTC-1001 CST First Year Seminar",
      "campus": "MN",
      "crn": 41531
    }
  ]

  export default appointments;
  