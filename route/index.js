function route(app) {
  app.get("/students", (req, res) => {
    let students = {
      status: "OK",
      data: [
        {
          name: "Thuy",
          id: "19020455",
        },
        {
          name: "Huyen",
          id: "17021420",
        },
        {
          name: "Trung",
          id: "17020456",
        },
      ],
    };
    res.json(students);
  });

  app.get("/students/:id", (req, res) => {
    let id = req.params.id;
    let student = {
      status: "OK",
      data: { mssv: id },
    };
    res.json(student);
  });

  app.put("/students/:id", (req, res) => {
    let student = {
      status: "OK",
      data: req.body,
    };
    res.json(student);
  });
  app.use("/", (req, res) => {
    res.send("Bài tập Web tuần 13: Định tuyến URL");
  });
}

module.exports = route;
