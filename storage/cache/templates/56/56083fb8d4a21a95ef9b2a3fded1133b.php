<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* layout.twig */
class __TwigTemplate_b6327b29e5b7612d7a65ab31ce3f68de extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'stylesheets' => [$this, 'block_stylesheets'],
            'javascripts' => [$this, 'block_javascripts'],
            'content' => [$this, 'block_content'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "<!DOCTYPE html>
<html lang=\"en\" class=\"h-full bg-gray-100\">
    <head>
        <meta charset=\"UTF-8\">
        <meta id=\"csrfName\" name=\"";
        // line 5
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["csrf"] ?? null), "keys", [], "any", false, false, false, 5), "name", [], "any", false, false, false, 5), "html", null, true);
        echo "\" content=\"";
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["csrf"] ?? null), "name", [], "any", false, false, false, 5), "html", null, true);
        echo "\">
        <meta id=\"csrfValue\" name=\"";
        // line 6
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["csrf"] ?? null), "keys", [], "any", false, false, false, 6), "value", [], "any", false, false, false, 6), "html", null, true);
        echo "\" content=\"";
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["csrf"] ?? null), "value", [], "any", false, false, false, 6), "html", null, true);
        echo "\">
        <title>";
        // line 7
        $this->displayBlock('title', $context, $blocks);
        echo "</title>
        <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">
        <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>
        <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap\"
              rel=\"stylesheet\">
        ";
        // line 12
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 15
        echo "
        ";
        // line 16
        $this->displayBlock('javascripts', $context, $blocks);
        // line 19
        echo "    </head>
    <body>
        <div class=\"container\">
            <header class=\"d-flex flex-wrap justify-content-center align-items-center py-3 mb-4\">
                <a href=\"/\" class=\"d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none\">
                    <img src=\"";
        // line 24
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("build/images/logo.png"), "html", null, true);
        echo "\" width=\"64\" height=\"64\" alt=\"Expennies Logo\" />
                    <span class=\"fs-1 fw-bold\">Ex<span class=\"text-primary\">pennies</span></span>
                </a>

                <ul class=\"nav nav-pills align-items-center\">
                    <li class=\"nav-item\">
                        <a href=\"/\" class=\"nav-link fw-bold fs-5 active\" aria-current=\"page\">Overview</a>
                    </li>
                    <li class=\"nav-item\">
                        <a href=\"/transactions\" class=\"nav-link fw-bold fs-5\" aria-current=\"page\">Transactions</a>
                    </li>
                    <li class=\"nav-item\">
                        <a href=\"/categories\" class=\"nav-link fw-bold fs-5\" aria-current=\"page\">Categories</a>
                    </li>
                </ul>

                <div class=\"dropdown user-dropdown-menu\">
                    <a href=\"#\" class=\"text-decoration-none d-flex align-items-center\" id=\"userDropDownMenu\" data-bs-toggle=\"dropdown\"
                       aria-expanded=\"false\">
                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"icon\">
                            <path fill-rule=\"evenodd\" d=\"M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z\" clip-rule=\"evenodd\" />
                        </svg>
                        <span>";
        // line 46
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["auth"] ?? null), "name", [], "any", false, false, false, 46), "html", null, true);
        echo "</span>
                    </a>
                    <ul class=\"dropdown-menu\" aria-labelledby=\"userDropDownMenu\">
                        <li>
                            <form action=\"/logout\" method=\"post\">
                                ";
        // line 51
        echo twig_get_attribute($this->env, $this->source, ($context["csrf"] ?? null), "fields", [], "any", false, false, false, 51);
        echo "
                                <button class=\"dropdown-item\" href=\"#\">Log Out</button>
                            </form>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
        <div class=\"container\">
            ";
        // line 60
        $this->displayBlock('content', $context, $blocks);
        // line 61
        echo "        </div>
    </body>
</html>
";
    }

    // line 7
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        echo "Expennies";
    }

    // line 12
    public function block_stylesheets($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 13
        echo "            ";
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackLinkTags("app");
        echo "
        ";
    }

    // line 16
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 17
        echo "            ";
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("app");
        echo "
        ";
    }

    // line 60
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
    }

    public function getTemplateName()
    {
        return "layout.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  164 => 60,  157 => 17,  153 => 16,  146 => 13,  142 => 12,  135 => 7,  128 => 61,  126 => 60,  114 => 51,  106 => 46,  81 => 24,  74 => 19,  72 => 16,  69 => 15,  67 => 12,  59 => 7,  53 => 6,  47 => 5,  41 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "layout.twig", "/var/www/resources/views/layout.twig");
    }
}
