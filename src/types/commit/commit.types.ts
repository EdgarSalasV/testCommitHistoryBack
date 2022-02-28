export interface iCommit {
  sha: string;
  node_id: string;
  url: string;
  html_url: string;
  author: iAuthor;
  committer: iCommitter;
  tree: iTree;
  parents: iParent[];
  verification: iVerification;
}

interface iAuthor {
  name: string;
  email: string;
  date: Date;
}

interface iCommitter {
  name: string;
  email: string;
  date: Date;
}

interface iTree {
  sha: string;
  url: string;
}

interface iParent {
  sha: string;
  url: string;
  html_url: string;
}

interface iVerification {
  verified: boolean;
  reason: string;
  signature?: any;
  payload?: any;
}
