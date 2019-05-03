{
  enum Status {
    Success,
    Fail = 10
  }

  console.log(Status.Success)
  console.log(Status.Fail)
  console.log(Status[10]) // 反向映射

  enum Fetch {
    Success = 'soccess',
    Fail = 'error'
  }
}
