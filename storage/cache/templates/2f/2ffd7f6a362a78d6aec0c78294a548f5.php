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

/* transactions/transaction_modal.twig */
class __TwigTemplate_26a2ab8d6dba18609f5712d3474c3d43 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "<div class=\"modal fade\" id=\"";
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["modal"] ?? null), "id", [], "any", false, false, false, 1), "html", null, true);
        echo "\" tabindex=\"-1\" aria-hidden=\"true\">
    <div class=\"modal-dialog\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h5 class=\"modal-title\">";
        // line 5
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["modal"] ?? null), "title", [], "any", false, false, false, 5), "html", null, true);
        echo "</h5>
                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>
            </div>
            <div class=\"modal-body\">
                <div class=\"form-outline form-white mb-4\">
                    <input type=\"text\" name=\"description\" required
                           class=\"form-control form-control-lg\"
                           placeholder=\"Description\" />
                </div>
                <div class=\"form-outline form-white mb-4\">
                    <input type=\"datetime-local\" name=\"date\" required
                           class=\"form-control form-control-lg\"
                           placeholder=\"Date\" />
                </div>
                <div class=\"form-outline form-white mb-4\">
                    <input type=\"number\" name=\"amount\" required
                           class=\"form-control form-control-lg\"
                           placeholder=\"\$ Amount\" />
                </div>
                <div class=\"form-outline form-white mb-4\">
                    <select class=\"form-select form-select-lg\" aria-label=\"Category\" name=\"category\">
                        <option value=\"\">Select Category</option>
                        ";
        // line 27
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["categories"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["category"]) {
            // line 28
            echo "                            <option value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["category"], "id", [], "any", false, false, false, 28), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["category"], "name", [], "any", false, false, false, 28), "html", null, true);
            echo "</option>
                        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['category'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 30
        echo "                    </select>
                </div>
            </div>
            <div class=\"modal-footer\">
                <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">
                    <i class=\"bi bi-x-circle me-1\"></i>
                    Close
                </button>
                <button type=\"button\" class=\"btn btn-success ";
        // line 38
        echo ((twig_get_attribute($this->env, $this->source, ($context["modal"] ?? null), "isEdit", [], "any", false, false, false, 38)) ? ("save") : ("create"));
        echo "-transaction-btn\">
                    <i class=\"bi bi-check-circle me-1\"></i>
                    ";
        // line 40
        echo ((twig_get_attribute($this->env, $this->source, ($context["modal"] ?? null), "isEdit", [], "any", false, false, false, 40)) ? ("Save") : ("Create"));
        echo "
                </button>
            </div>
        </div>
    </div>
</div>
";
    }

    public function getTemplateName()
    {
        return "transactions/transaction_modal.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  100 => 40,  95 => 38,  85 => 30,  74 => 28,  70 => 27,  45 => 5,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "transactions/transaction_modal.twig", "/var/www/resources/views/transactions/transaction_modal.twig");
    }
}
