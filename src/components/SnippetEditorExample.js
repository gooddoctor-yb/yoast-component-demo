import React, { Component } from "react";
import { assessments } from "yoastseo";
import { SnippetEditor } from "@yoast/search-metadata-previews";
const { MetaDescriptionLengthAssessment } = assessments.seo;
const replacementVariables = [
	{
		name: "title",
		label: "Title",
		value: "Title",
		description: "This is the title of your post",
	},
	{
		name: "post_type",
		label: "Post type",
		value: "Gallery",
		description: "This is the post type of your post",
	},
	{
		name: "sep",
		label: "Separator",
		value: " - ",
		description: "A separator that clarifies your search result snippet",
	},
	{
		name: "term404",
		label: "Error 404 slug",
		value: "Error 404 slug",
		description: "The slug which caused the error 404",
	},
];

const recommendedReplacementVariables = [
	replacementVariables[ 0 ].name,
	replacementVariables[ 1 ].name,
];

export default class SnippetEditorExample extends Component {
  constructor(props) {
    super(props);
    const descriptionLengthAssessment = new MetaDescriptionLengthAssessment();
    this.maximumMetaDescriptionLength = descriptionLengthAssessment.getMaximumLength();
    this.state = {
      title:
        "Welcome to the Gutenberg Editor - Local WordPress Dev. Snippet Title Snippet" +
        " Snippet: %%snippet%% Title: %%title%% Manual: %%snippet_manual%% Type: %%post_type%%" +
        " %%these%% %%are%% %%not%% %%tags%% and throw in some % here %%%%%%% and %%there too%%",
      url: "https://local.wordpress.test/welcome-to-the-gutenberg-editor/",
      slug: "welcome-to-the-gutenberg-editor",
      description:
        "Merci, merçi, Of Mountains & Printing Presses The goal of this new editor is to make" +
        " adding rich content to WordPress simple and enjoyable. This whole post is composed" +
        " of. Of Mountains & Printing Presses The goal of this new editor is to make adding" +
        " rich content to WordPress simple and enjoyable. This whole post is composed of. Of" +
        " Mountains & Printing Presses The goal of this new editor is to make adding rich" +
        " content to WordPress simple and enjoyable. This whole post is composed of Of Mountains" +
        " & Printing Presses The goal of this new editor is to make adding rich content to" +
        " WordPress simple and enjoyable. This whole post is composed of. Of Mountains & Printing" +
        " Presses The goal of this new editor is to make adding rich content to WordPress" +
        " simple and enjoyable. This whole post is composed of. Of Mountains & Printing Presses" +
        " The goal of this new editor is to make adding rich content to WordPress simple and" +
        " enjoyable. This whole post is composed of",
      keyword: "merci",
      date: "Jan 8, 2018",
      locale: "fr",
      onClick(type) {
        // eslint-disable-next-line no-console
        console.log("clicked:", type);
      },
      breadcrumbs: ["hallo", "is", "it", "me", "you"],
      isAmp: true,
      isOpen: false,
      currentTitleLength: 0,
      currentDescriptionLength: 0,
    };
    this.onChangedData = this.onChangedData.bind( this );
  }

  render() {

    const titleLengthProgress = {
			max: 600,
			actual: this.state.currentTitleLength,
			score: this.state.currentTitleLength > 300 ? 9 : 6,
		};

		const descriptionLengthProgress = {
			max: this.maximumMetaDescriptionLength,
			actual: this.state.currentDescriptionLength,
			score: this.state.currentDescriptionLength > 120 ? 9 : 3,
		};

    return (
      <div className="container mx-auto">
        <SnippetEditor
          {...this.state}
          data={data}
          baseUrl="https://local.wordpress.test/"
          onChange={this.onChangedData}
          replacementVariables={replacementVariables}
          recommendedReplacementVariables={recommendedReplacementVariables}
          titleLengthProgress={titleLengthProgress}
          descriptionLengthProgress={descriptionLengthProgress}
        />
      </div>
    );
  }
}
