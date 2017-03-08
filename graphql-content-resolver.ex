<% const nameAsSnakeCase = _.snakeCase(Name); -%>
<% const addEmptyResolver = _.includes(ExampleResolvers, "Empty Resolver") -%>
<% const addLinkResolver = _.includes(ExampleResolvers, "Link Resolver") -%>
<% const addLocalisedTextResolver = _.includes(ExampleResolvers, "Localised Text Resolver") -%>
defmodule TitanApi.GraphQL.Content.<%- NameSpace + '.' + Name %>
  use Absinthe.Schema.Notation
  use TitanApi.GraphQL.Content.ResolveText, domain: "<%- nameAsSnakeCase %>", only: [localised_text: 1]
  import TitanApi.Gettext

  defstruct [
    <%- _.map(ExampleResolvers, (resolver) => `${_.snakeCase(resolver)}: nil`).join(',\n    '); %>
  ]

  def resolve(_, _), do: {:ok, %__MODULE__{}}

  object :content_<%- nameAsSnakeCase -%>,
    description: "content of the <%- _.startCase(Name) %> component"
  do
<% if (addLocalisedTextResolver) { -%>
    field :localised_text_field, :string, description: "DESCRIPTION HERE" do
      resolve localised_text "localisedTag"
    end
<% } -%>
<% if (addEmptyResolver) { -%>
    field :empty_resolver, :integer, description: "DESCRIPTION HERE" do
      resolve &empty_resolver/2
    end
<% } -%>
<% if (addLinkResolver) { -%>
    field :link_field, :link, description: "DESCRIPTION HERE" do
      resolve &link_field/2
    end
<% } -%>
  end
<% if (addEmptyResolver) { -%>

  defp empty_resolver(_, _) do
    {:ok, 666}
  end
<% } -%>
<% if (addLinkResolver) { -%>

  defp newspapers_link(_, _) do
    {:ok, %Link{
      text: dgettext("potFileReference", "localisedTagHere"),
      href: wrangle( "/link/path/in/legacy/fmp"),
      tr: dgettext("potFileReference", "localisedTagHere")
      }
    }
  end
<%_}_%>
end
