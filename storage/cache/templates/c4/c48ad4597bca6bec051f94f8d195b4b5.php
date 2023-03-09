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

/* categories/index.twig */
class __TwigTemplate_39cb5480237872226035c6bc13d48ca5 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'javascripts' => [$this, 'block_javascripts'],
            'title' => [$this, 'block_title'],
            'content' => [$this, 'block_content'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "layout.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $this->parent = $this->loadTemplate("layout.twig", "categories/index.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 4
        echo "    ";
        $this->displayParentBlock("javascripts", $context, $blocks);
        echo "
    ";
        // line 5
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("categories");
        echo "
";
    }

    // line 8
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        echo "Categories";
    }

    // line 10
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 11
        echo "    <div class=\"categories container content-body\">
        <div class=\"text-end mb-4\">
            <button type=\"button\" class=\"btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#newCategoryModal\">
                <i class=\"bi bi-plus-circle me-1\"></i>
                New Category
            </button>
        </div>
        <div class=\"modal fade\" id=\"newCategoryModal\" tabindex=\"-1\" aria-hidden=\"true\">
            <div class=\"modal-dialog\">
                <form action=\"/categories\" method=\"post\">
                    <div class=\"modal-content\">
                        <div class=\"modal-header\">
                            <h5 class=\"modal-title\">New Category</h5>
                            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>
                        </div>
                        <div class=\"modal-body\">
                            ";
        // line 27
        echo twig_get_attribute($this->env, $this->source, ($context["csrf"] ?? null), "fields", [], "any", false, false, false, 27);
        echo "
                            <div class=\"form-outline form-white mb-4\">
                                <input type=\"text\" name=\"name\" required
                                       class=\"form-control form-control-lg\"
                                       placeholder=\"Category Name\" />
                            </div>
                        </div>
                        <div class=\"modal-footer\">
                            <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">
                                <i class=\"bi bi-x-circle me-1\"></i>
                                Close
                            </button>
                            <button type=\"submit\" class=\"btn btn-success\">
                                <i class=\"bi bi-check-circle me-1\"></i>
                                Create
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        ";
        // line 48
        $this->loadTemplate("categories/edit_category_modal.twig", "categories/index.twig", 48)->display($context);
        // line 49
        echo "        <div>
            <table id=\"categoriesTable\">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>
";
    }

    public function getTemplateName()
    {
        return "categories/index.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  118 => 49,  116 => 48,  92 => 27,  74 => 11,  70 => 10,  63 => 8,  57 => 5,  52 => 4,  48 => 3,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "categories/index.twig", "/var/www/resources/views/categories/index.twig");
    }
}
