const [_, __, ...args] = process.argv;

console.log(
  args.reduce((total, arg) => {
    let t = total;
    t += Number(arg);
    return t;
  }, 0)
);
