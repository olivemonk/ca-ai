import GithubSVG from "../assets/github.svg";
import BitbucketSVG from "../assets/bitbucket.svg";
import AzureDevopsSVG from "../assets/azuredevops.svg";
import GitlabSVG from "../assets/gitlab.svg";
import KeySVG from "../assets/key.svg";


export const signInButtons = [
  {
    text: "Sign in with GitHub",
    icon: GithubSVG,
    iconType: "svg",
    type: "saas"
  },
  {
    text: "Sign in with Bitbucket",
    icon: BitbucketSVG,
    iconType: "svg",
    type: "saas"
  },
  {
    text: "Sign in with Azure DevOps",
    icon: AzureDevopsSVG,
    iconType: "svg",
    type: "saas"
  },
  {
    text: "Sign in with GitLab",
    icon: GitlabSVG,
    iconType: "svg",
    type: "saas"
  },

  {
    text: "Self Hosted GitLab",
    icon: GitlabSVG,
    iconType: "svg",
    type: "self-hosted",
  },
  {
    text: "Sign in with SSO",
    icon: KeySVG,
    iconType: "svg",
    type: "self-hosted",
  },
];
