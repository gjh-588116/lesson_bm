```js
#include <iostream>
#include <vector>

using namespace std;

struct TreeNode
{
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode (int x): val(x), left(NULL), right(NULL) {}
};

class Solution
{
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        // 分两步
        // 1）找到从根结点到节点p的路径p_path；找到从根节点到节点q的路径q_path；
        // 例如：p_path = [3, 5] q_path = [3, 1]
        // 2) 同时遍历p_path和q_path，找到最后一个相等的元素3，即最终结果

        vector< TreeNode* > p_path;
        vector< TreeNode* > q_path;
        vector< TreeNode* > path;  // 临时栈节点
        int finish = 0;  // 标志是否找到待搜索节点
        TreeNode* result = 0;  // 最终返回的最近公共祖先

        // ++++++++++++ 步骤1 +++++++++++++++++
        // 找到节点p的路径
        preorder(root, p, p_path, path, finish);

        // 找到节点q的路径
        path.clear();  // 先清空临时栈路径
        finish = 0;  // 重新置0
        preorder(root, q, q_path, path, finish);

        // ++++++++++++ 步骤2 ++++++++++++++++
        // 同时遍历p_path和q_path
        int min_len;
        if (p_path.size() < q_path.size())
            min_len = p_path.size();
        else
            min_len = q_path.size();

        for (int i = 0; i < min_len; i ++)
        {
            if (p_path[i] == q_path[i])
                result = p_path[i];
        }

        return result;
    }
private:
    // 找到从根结点到某节点的路径
    void preorder(TreeNode* node, TreeNode* search, vector< TreeNode* >& result,
            vector< TreeNode* >& path, int& finish)
    {
        // search是待搜索节点
        // path 是临时存储栈
        // result 是最终找到的结果
        // finish 表示是否已经找到，如果找到置为1，默认为0

        if ( !node || finish == 1)  // 如果node为空（叶节点了）或者finish=1(找到search了)
            return;

        path.push_back(node);  // 当前节点压入到临时栈中

        if ( node == search)
        {
            // 如果找到了
            finish = 1;  // 找到了，即使还没到叶节点，也要返回了
            result = path; // 保存最终结果
        }

        preorder(node->left, search, result,  path, finish);
        preorder(node->right, search, result, path, finish);
        path.pop_back();  // 以当前节点为根的子树搜索完后，弹出该节点，对应的子树也弹出了
    }
};


int main()
{
    TreeNode a(3);
    TreeNode b(5);
    TreeNode c(1);
    TreeNode d(6);
    TreeNode e(2);
    TreeNode f(0);
    TreeNode g(8);
    TreeNode h(7);
    TreeNode i(4);

    a.left = &b;
    a.right = &c;
    b.left = &d;
    b.right = &e;
    c.left = &f;
    c.right=  &g;
    e.left = &h;
    e.right = &i;

    Solution S;
    TreeNode* p = &d;  // 可以改为其他节点
    TreeNode* q = &i;
    TreeNode* res = S.lowestCommonAncestor(&a, p, q);
    cout << res->val << endl;
    return 0;
}

```