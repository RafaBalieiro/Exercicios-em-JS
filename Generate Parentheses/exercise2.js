//good perfomance

const generateParenthesis = function (n) {
  const result = [];

  const dfs = (i, n, slate, oCount, cCount) => {
    if (oCount > n) return;
    if (cCount > oCount) return;

    if (i === n * 2) {
      result.push(slate.join(""));
      return;
    }

    //add open parentheses

    slate.push("(");
    dfs(i + 1, n, slate, oCount + 1, cCount);
    slate.pop();

    //add closed parentheses

    slate.push(")");
    dfs(i + 1, n, slate, oCount, cCount + 1);
    slate.pop();
  };

  dfs(0, n, [], 0, 0);
  return result;
};
