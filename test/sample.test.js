var apiUrl = "http://localhost:3000";
describe("/test", function() {
    it("/sample", function(done) {
        request(apiUrl)
            .get("/sample")
            .expect(200) // status
            .expect((res) => {
                expect(res.body.sample)
                    .toBe("sample");
                })
            .end(done);
    })
})